import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
// own css files here
// import "../css/customcss.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZwT" crossorigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}