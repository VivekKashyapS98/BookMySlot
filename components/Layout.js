import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="w-screen min-h-screen cursor-default text-gray-600">
      <Head>
        <title>BookMySlot</title>
        <meta property="og:title" content="BookMySlot" key="title" />
        <meta
          name="description"
          content="A time slot booking site"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-20 z-10 bg-gray-100 border-b-2 border-gray-200 backdrop-filter flex flex-row px-4 justify-between items-center">
        <h1 className="text-2xl italic font-bold md:text-4xl">BookMySlot</h1>
      </header>
      <div className="min-h-screen container m-auto">
        <div>{children}</div>
      </div>
      <footer className="bg-gray-100 border-gray-200 flex flex-col">
        <h1 className="m-2 md:m-4 text-2xl italic font-bold md:text-4xl">
          BookMySlot
        </h1>
        <div className="text-center my-2 sm:my-4">
          <h3 className="text-lg font-semibold inline-block md:text-xl">
            Crafted by:
          </h3>
          <a
            className="text-lg font-semibold transform-gpu duration-200 text-blue-500 md:text-xl hover:text-blue-600"
            href="https://vkcodes.vercel.app"
            rel="noreferrer"
            target="_blank"
          >
            VKcodes
          </a>
        </div>
      </footer>
    </div>
  );
}
