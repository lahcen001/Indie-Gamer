import Heading from "../../components/Heading.jsx";
import Link from "next/link";
import { getReview, getSlugs } from "../../lib/reviews.js";



export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}


async function  Page({params : {slug }}) {
const review = await getReview(slug);
  return (
    <>
      <Heading> {review.title}</Heading>

      <p className="italic pb-2"> {review.date}</p>
      <img
        src={review.image}
        alt=""
        width="640"
        heights="360"
        className="mb-2 rounded"
      />

      <article
        dangerouslySetInnerHTML={{ __html: review.html }}
        className="prose"
      />
    </>
  );
}
export default Page;
