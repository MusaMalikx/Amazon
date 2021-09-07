import Image from "next/image";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Currency from 'react-currency-formatter';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

const Product = ({ id, image, price, rating, title, category, description }) => {


    //console.log(rating.rate)
    const dispatch = useDispatch();
    const [hasPrime] = useState(Math.random() < 0.5);

    const addItemToCart = () => {
        const product = {
            id,
            image,
            price,
            rating,
            title,
            category,
            description,
            hasPrime
        };

        dispatch(addToBasket(product));
    }

    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <div className='card-zoom'>
                <Image className='card-zoom-image' src={image} height={200} width={200} objectFit="contain" />
            </div>
            <h4 className='my-3'>{title}</h4>
            <Stack spacing={1}>
                <Rating name="half-rating-read size-small" defaultValue={rating.rate} precision={0.1} size="small" readOnly />
            </Stack>
            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <div className='mb-5'>
                <Currency quantity={price} currency="GBP" />
            </div>
            {
                hasPrime && (
                    <div className='flex items-center space-x-2 -mt-5'>
                        <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                        <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                    </div>
                )
            }
            <button onClick={addItemToCart} className='mt-auto button'>Add to Basket</button>
        </div>
    )
}

export default Product;
