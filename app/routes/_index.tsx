// routes/_index.tsx

import React from "react";
import { Links, Outlet, MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Skincare Review Site" },
    { name: "description", content: "Welcome to my skincare review site!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="font-sans p-4">
        <h1 className="text-3xl">Welcome to My Skincare Review Site</h1>
        <p className="mt-4">
          Discover the best skincare products reviewed by experts. Explore our latest reviews and find the perfect products for your skin type.
        </p>
        <ul className="list-disc mt-4 pl-6 space-y-2">
          <li>Comprehensive product reviews</li>
          <li>Tips and tricks for skincare</li>
          <li>Latest trends in skincare</li>
        </ul>
      </div>
      <Links />
    </>
  );
}
