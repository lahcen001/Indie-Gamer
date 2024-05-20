import {readFile , readdir} from 'node:fs/promises';
import matter from 'gray-matter'
import { marked} from 'marked'

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
   const slugs = await getSlugs();
   const reviews = [];
    for (const slug of slugs) {
        const review = await getReview(slug);
        reviews.push(review);
    }

  
    return reviews;
}


export async function getSlugs() {
    const files = await readdir('./app/content/reviews');
    const slugs = [];
    for (const file of files) {
        slugs.push(file.replace('.md', ''));
    }
    return slugs;
}
