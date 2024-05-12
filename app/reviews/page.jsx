import Heading from "./../components/Heading";
import Link from "next/link";
 function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-4">
        <li className="bg-white  border rounded-lg shadow-md p-4 w-80 hover:shadow-lg transition duration-500 ease-in-out">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt=""
              width="320"
              heights="180"
              className="mb-2 rounded"
            />
            <h2 className="py-2 text-center">Hollow knight</h2>
          </Link>
        </li>
        <li className="bg-white  border rounded-lg shadow-md p-4 w-80 hover:shadow-lg transition duration-500 ease-in-out">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt=""
              width="320"
              heights="180"
              className="mb-2 rounded"
            />
            <h2 className="py-2 text-center"> Stardew Valley</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
export default ReviewsPage;