import Navbar from "../components/common/Navbar";
import {useRouter} from 'next/router'
import type { AppProps } from "next/app";
import "../styles/globals.css";

const fullWidthNavBarPaths = new Set(['/admin']);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
console.log(fullWidthNavBarPaths.has(router.pathname))
  return (
      <main className={`grid grid-rows-page font-montserrat mx-auto min-h-screen ${fullWidthNavBarPaths.has(router.pathname) ? "" : "max-w-[1200px]"}`}>
        <Navbar />
      <Component {...pageProps} />
      </main>
  );
}
