// root.tsx

import React from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex">
        <aside className="w-64 bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-4">Sidebar</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-700 underline">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-700 underline">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-700 underline">
                  Link 3
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
