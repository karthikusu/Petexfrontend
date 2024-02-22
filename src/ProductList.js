import './App.css';

function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='product-item' style={{ marginLeft : "150px"}}>
                                <img src={productItem.url} width="30%" />
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                               style={{backgroundColor : "darkmagenta", color : "white", width : "200px", height : "4vh", borderRadius : "1rem"}} >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;