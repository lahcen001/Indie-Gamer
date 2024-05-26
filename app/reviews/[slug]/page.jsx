import Heading from "../../components/Heading.jsx";
import Link from "next/link";
import { getReview, getSlugs } from "../../lib/reviews.js";
import { Share } from "next/font/google/index.js";
import ShareLinkButton from "../../components/ShareLinkButton.jsx";



export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}


async function  Page({params : {slug }}) {
const review = await getReview(slug);
console.log('review : ', review.image)
  return (
    <>
      
        <Heading> {review.title}</Heading>
        <div className="flex gap-3 items-baseline  ">
          <p className="italic pb-2"> {review.date}</p>
          <ShareLinkButton />
        </div>

        <img
          src={review.image}
          alt=""
          width="640"
          heights="360"
          className="mb-2 rounded"
        />

        <p>{review.body}</p>
    
    </>
  );
}
export default Page;
