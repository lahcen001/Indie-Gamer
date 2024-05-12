import React from 'react'

import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link
            className=" underline-offset-4 hover:underline  text-orange-800 "
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className=" underline-offset-4 hover:underline  text-orange-800 "
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className=" underline-offset-4 hover:underline  text-orange-800 "
            href="/reviews"
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            className=" underline-offset-4 hover:underline  text-orange-800 "
            href="/reviews/stardew-valley"
          >
            Stardew Valley
          </Link>
        </li>
        <li>
          <Link
            className=" underline-offset-4 hover:underline  text-orange-800 "
            href="/reviews/hollow-knight"
          >
            Hollow Knight
          </Link>
        </li>
      </ul>
    </nav>
  );
}
