import Heading from "./../components/Heading";
import Link from "next/link";
import { getReviews } from "./../lib/reviews";
async function ReviewsPage() {
  const reviews  = await getReviews()

  console.log('reviews : ',reviews)
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-wrap gap-4 justify-center ">
          {
            reviews.map((review) => (
              <li className="bg-white  border rounded-lg shadow-md p-4 w-80 hover:shadow-lg transition duration-500 ease-in-out">
                <Link href={`/reviews/${review.slug}`}>
                  <img
                    src={review.image}
                    alt=""
                    width="320"
                    heights="180"
                    className="mb-2 rounded"
                  />
                  <h2 className="py-2 text-center">{review.title}</h2>
                </Link>
              </li>
            ))
          }

       


      </ul>
    </>
  );
}
export default ReviewsPage;