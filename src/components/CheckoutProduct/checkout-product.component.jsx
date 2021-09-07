import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../slices/basketSlice';

const CheckoutProduct = ({ id, image, price, rating, title, category, description, hasPrime }) => {

    const dispatch = useDispatch();

    const removeItemFromCart = () => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className='grid grid-cols-5'>
            <Image src={image} width={200} height={200} objectFit='contain' />

            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <Stack spacing={1}>
                    <Rating name="half-rating-read size-small" defaultValue={rating.rate} precision={0.1} size="small" readOnly />
                </Stack>
                <p className='text-xs my-2 line-clamp-3' >{description}</p>
                <Currency quantity={price} currency='GBP' />
                {
                    hasPrime && (
                        <div className='flex items-center space-x-2 -mt-5'>
                            <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                        </div>
                    )
                }
            </div>

            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                {/* <button className='button'>Add to Cart</button> */}
                <button onClick={removeItemFromCart} className='button'>Remove from Cart</button>
            </div>

        </div>
    )
}

export default CheckoutProduct;
