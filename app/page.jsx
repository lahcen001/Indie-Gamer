import Heading from "./components/Heading"
import { getReviews } from "./lib/reviews";
import  Link from "next/link";
import Image from "next/image";
import {orbitron } from "./font";

export  default async function HomePage() {
  const reviews  = await getReviews(3)
    return (
      <>
        <Heading>Indie Gamer</Heading>
        <p>Only the best indie gamer , for the best indie gamers</p>

        <ul className="gap-4 flex flex-col">
          {reviews.map((review) => (
            <li className="bg-white  border rounded-lg shadow-md p-4 w-100 hover:shadow-lg transition duration-500 ease-in-out">
              <Link
                href={`/reviews/${review.slug}`}
                className="flex flex-row flex-wrap "
              >
                <Image
                  src={review.image}
                  alt=""
                  width="320"
                  height="180"
                  className="mb-2 rounded"
                />
                <div className=" px-2 py-1 text-center sm:text-left">
                  <h2
                    className={`p-2  font-bold  ${orbitron.className}`}
                  >
                    {review.title}
                  </h2>
                  <p className="py-2 px-3 hidden  sm:block">{review.subtitle}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
} 