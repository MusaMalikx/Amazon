import Product from "../Product/product.component";

const ProductFeed = ({ products }) => {

    //console.log(products)

    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            {
                products.slice(0, 4).map(({ id, image, price, rating, title, category, description }) => (
                    <Product
                        key={id}
                        id={id}
                        image={image}
                        price={price}
                        rating={rating}
                        title={title}
                        category={category}
                        description={description}
                    />
                ))
            }
            <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" />
            <div className='md:col-span-2'>
                {
                    products.slice(4, 5).map(({ id, image, price, rating, title, category, description }) => (
                        <Product
                            key={id}
                            id={id}
                            image={image}
                            price={price}
                            rating={rating}
                            title={title}
                            category={category}
                            description={description}
                        />
                    ))
                }
            </div>
            {
                products.slice(5, products.length).map(({ id, image, price, rating, title, category, description }) => (
                    <Product
                        key={id}
                        id={id}
                        image={image}
                        price={price}
                        rating={rating}
                        title={title}
                        category={category}
                        description={description}
                    />
                ))
            }
        </div>
    )
}

export default ProductFeed;
