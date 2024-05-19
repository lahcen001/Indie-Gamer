import React from "react";

import Link from "next/link";
import Heading from "./Heading";
export default function Navbar() {
  return (
    <div className="flex justify-between border-b-2 border-orange-800 py-1">
      <Heading className>
        <span className="text-orange-800 text-xl mx-4"> Endie Game </span>
      </Heading>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              className="underline-offset-4 hover:underline text-orange-800"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="underline-offset-4 hover:underline text-orange-800"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="underline-offset-4 hover:underline text-orange-800"
              href="/reviews"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
