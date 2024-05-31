

import qs from 'qs'
const CMS_URL = "http://localhost:1337";

export async function getReview(slug) {


     const fetchdata = await FetchReviews(
       {
         filters: { slug: { $eq: slug } },
         fields: ["title", "slug", "subtitle", "body", "publishedAt"],
         populate: { image: { fields: ["url"] } },
         pagination: { pageSize: 1 },
       },
       { econdeValuesOnly: true }
     );


    const review = fetchdata[0];

  
    return {
      title: review.attributes.title,
      subtitle: review.attributes.subtitle,
      date: review.attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
      slug: review.attributes.slug,
      id: review.id,
      image: CMS_URL + review.attributes.image.data.attributes.url,
      body: review.attributes.body,
    };


}

export async function getReviews(count) {


const data = await FetchReviews(
  {
    fields: ["title", "slug", "subtitle", "body", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: count },
  },
  { econdeValuesOnly: true }
);



return data.map((review) => ({
  title: review.attributes.title,
  subtitle: review.attributes.subtitle,
  date: review.attributes.publishedAt,
  slug: review.attributes.slug,
  id: review.id,
  image: CMS_URL + review.attributes.image.data.attributes.url,
}));

}

export async function FetchReviews( params){

const url =
  CMS_URL+"/api/reviews" +
  "?" +
  qs.stringify(params);
const response = await fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
const { data } = await response.json();
return data

}


export async function getSlugs() {
    const  data  = await FetchReviews({
      fields: ["slug"],
      pagination: { pageSize: 100 },
    });



   return data.map((review) => ( review.attributes.slug))
}

