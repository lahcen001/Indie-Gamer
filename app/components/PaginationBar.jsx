
'use client'
import React from "react";
import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
export default function PaginationBar({page, pageCount}) {
  
  return (
    <div className="flex gap-3 items-center pb-3">
      <PaginationLink href={`/reviews?page=${page - 1 > 0 ? page - 1 : 1}`}>
        <ChevronLeftIcon className="h-5 w-5" />
      </PaginationLink>
      <span>Page {page} of  {pageCount}</span>
      <PaginationLink href={`/reviews?page=${page + 1  < pageCount ? page + 1 : pageCount}}`}>
        <ChevronRightIcon className="h-5 w-5" />
      </PaginationLink>
    </div>
  );
}

function PaginationLink({ children , enabled , href}) {

  return (
    <Link
      href={href}
      className={`border rouded text-slate-500 text-sm hover: bg-orange-100 hover:text-slate-700`}
    >
      {children}
    </Link>
  );

}