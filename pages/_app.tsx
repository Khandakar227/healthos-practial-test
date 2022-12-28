import Navbar from "../components/common/Navbar";
import {useRouter} from 'next/router'
import type { AppProps } from "next/app";
import {ToastContainer} from 'react-toastify'
import CartProvider from "../context/cart";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.min.css';

const fullWidthNavBarPaths = new Set(['/admin']);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <CartProvider>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <main className={`grid grid-rows-page font-montserrat mx-auto min-h-screen ${fullWidthNavBarPaths.has(router.pathname) ? "" : "max-w-[1200px]"}`}>
        <Navbar />
      <Component {...pageProps} />
      </main>
    </CartProvider>
  );
}
