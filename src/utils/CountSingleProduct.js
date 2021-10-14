import { useSelector  } from 'react-redux';


function CountSingleProduct() {
    const {shopCartProducts} = useSelector((state) => state.cart);
    const countSingleProduct = shopCartProducts?.map(product => product.price * product.quantity);

    return countSingleProduct
}

export default CountSingleProduct
