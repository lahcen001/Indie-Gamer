import Heading from "./../components/Heading";
import Link from "next/link";
import { getReviews } from "./../lib/reviews";
import Image  from "next/image";
import PaginationBar from "../components/PaginationBar";
async function ReviewsPage({ searchParams }) {

  const page = isFinite(parseInt(searchParams.page))
    ? parseInt(searchParams.page)
    : 1;

   const {reviews, pageCount} = await getReviews(4, page);
  return (
    <>
      <Heading>Reviews </Heading>

      <PaginationBar page={page} pageCount={pageCount} />

      <ul className="flex flex-wrap gap-4 justify-center ">
        {reviews.map((review) => (
          <li className="bg-white  border rounded-lg shadow-md p-4 w-80 hover:shadow-lg transition duration-500 ease-in-out">
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="mb-2 rounded"
              />
              <h2 className="py-2 text-center">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ReviewsPage;