import Head from "next/head";
import Banner from "../components/Banner/banner.component";
import Header from "../components/Header/header.component";
import ProductFeed from "../components/ProductFeed/productFeed.component";

export default function Home({products}) {

  //console.log(products)

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon</title>
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>

        <Banner />
        <ProductFeed products={products} />

      </main>

    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json()
    );

  return {
    props: {
      products,
    },
  };

}

//https://fakestoreapi.com/products