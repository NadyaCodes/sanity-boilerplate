import React from "react";
import Link from "next/link";
import { Page } from "@/types/Page";

export default function Menu({ extraPages }: { extraPages: Page[] }) {
  return (
    <div className="flex flex-wrap items-center">
      <Link
        href="/about"
        className="mx-3 p-3 lg:mx-5 not-italic text-emerald-800 no-underline hover:bg-emerald-900 hover:text-white transition-all rounded"
      >
        About
      </Link>
      <Link
        href="/media"
        className="mx-3 p-3 lg:mx-5 not-italic text-emerald-800 no-underline hover:bg-emerald-900 hover:text-white transition-all rounded"
      >
        Media
      </Link>
      <Link
        href="/gallery"
        className="mx-3 p-3 lg:mx-5 not-italic text-emerald-800 no-underline hover:bg-emerald-900 hover:text-white transition-all rounded"
      >
        Gallery
      </Link>
      {extraPages.map((page) => (
        <Link
          key={page._id}
          href={`/${page.slug}`}
          className="mx-3  p-3 lg:mx-5 not-italic text-emerald-800 no-underline hover:bg-emerald-900 hover:text-white transition-all rounded"
        >
          {page.name}
        </Link>
      ))}
      <Link
        href="/contact"
        className="mx-3 p-3 lg:mx-5 not-italic text-emerald-800 no-underline hover:bg-emerald-900 hover:text-white transition-all rounded"
      >
        Contact
      </Link>
    </div>
  );
}
