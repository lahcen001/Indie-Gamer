import {readFile , readdir} from 'node:fs/promises';
import matter from 'gray-matter'
import { marked} from 'marked'
import qs from 'qs'
const CMS_URL = "http://localhost:1337";

export async function getReview(slug) {


     const fetchdata = await FetchReviews(
       {
         filters: { slug: { $eq: slug } },
         fields: ["title", "slug", "subtitle", "body"],
         populate: { image: { fields: ["url"] } },
         pagination: { pageSize: 1 },
       },
       { econdeValuesOnly: true }
     );


    const review = fetchdata[0];

  
    return {
      title: review.attributes.title,
      subtitle: review.attributes.subtitle,
      date: review.attributes.publishedAt,
      slug: review.attributes.slug,
      id: review.id,
      image: CMS_URL + review.attributes.image.data.attributes.url,
      body: review.attributes.body,
    };


}

export async function getReviews() {


const data = await FetchReviews(
  {
    fields: ["title", "slug", "subtitle", "body"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 100 },
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
    const files = await readdir('./app/content/reviews');
    const slugs = [];
    for (const file of files) {
        slugs.push(file.replace('.md', ''));
    }
    return slugs;
}
