import Header from "../components/Header/header.component";
import Image from "next/dist/client/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct/checkout-product.component";
import Currency from "react-currency-formatter";
import { selectUser } from "../slices/userSlice";

const Checkout = () => {

    const total = useSelector(selectTotal);
    const items = useSelector(selectItems);
    const user = useSelector(selectUser);

    return (
        <div className='bg-gray-100'>
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto'>
                <div className='flex-grow m-5 shadow-sm'>
                    <Image
                        src="http://links.papareact.com/ikj"
                        width={1020}
                        height={270}
                        objectFit="contain"
                    />
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>
                            {
                                items.length === 0 ? 'Your Amazon Cart is Empty' : 'Cart Items'
                            }
                        </h1>
                        {
                            items.map((item, i) => (
                                <CheckoutProduct
                                    key={i}
                                    id={item.id}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    title={item.title}
                                    category={item.category}
                                    description={item.description}
                                    hasPrime={item.hasPrime}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {
                        items.length > 0 && (
                            <>
                                <h2 className='whitespace-nowrap'>Subtotal ({items.length}) : {" "}
                                    <span className='font-bold'>
                                        <Currency quantity={total} currency="GBP" />
                                    </span>
                                </h2>
                                <button className={`button mt-2 ${!user && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                    {
                                        !user ? "Sign to Checkout" : "Proceed to Checkout"
                                    }
                                </button>
                            </>
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default Checkout
