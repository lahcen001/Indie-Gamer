import {readFile , readdir} from 'node:fs/promises';
import matter from 'gray-matter'
import { marked} from 'marked'
import qs from 'qs'

export async function getReview(slug) {
    const text = await readFile('./app/content/reviews/'+slug+'.md', 'utf-8');
    const { content , data : {title, image , date} } = matter (text);
    const html = marked(content, { headerIds: false, mangle: false });
    return {
        title,
        image,
        date,
        html,
        slug
    }
}

export async function getReviews() {
//    const slugs = await getSlugs();
//    const reviews = [];
//     for (const slug of slugs) {
//         const review = await getReview(slug);
//         reviews.push(review);
//     }

  
//     return reviews;
const url =
  "http://localhost:1337/api/reviews" +
  "?" +
  qs.stringify(
    {
      fields: ["title", "slug", "subtitle"],
      populate: { image: { fields: ["url"] } },
      pagination: { pageSize: 200 },
    },
    { econdeValuesOnly: true }
  );
const response = await fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});


const {data} = await response.json();
console.log(data);
return data.map((review) => ({
  title: review.attributes.title,
  subtitle: review.attributes.subtitle,
  date: review.attributes.publishedAt,
  slug: review.attributes.slug,
  id: review.id,
  image:'http://localhost:1337' + review.attributes.image.data.attributes.url,
}))

}


export async function getSlugs() {
    const files = await readdir('./app/content/reviews');
    const slugs = [];
    for (const file of files) {
        slugs.push(file.replace('.md', ''));
    }
    return slugs;
}
