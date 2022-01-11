import Head from "next/head";
import { useEffect } from "react";
import Banner from "../components/Banner/banner.component";
import Header from "../components/Header/header.component";
import ProductFeed from "../components/ProductFeed/productFeed.component";
import {auth} from '../base/firebase'
import { login, logout } from "../slices/userSlice";
import { useDispatch } from "react-redux";

export default function Home({products}) {

  //console.log(products)
  const dispatch = useDispatch();

  useEffect(()=>{
    const subscription = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //log in
        console.log(userAuth)
        dispatch(login(
          {
            uid: userAuth.uid,
            email: userAuth.email,
            name: userAuth.displayName
          }
        ));
        // dispatch(verify(auth.currentUser.emailVerified));
        // console.log(emailVerification);
      }
      else {
        //logout 
        dispatch(logout());
      }
    });

    return subscription;
  })

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/ama.png" />
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