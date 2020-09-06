import React from 'react';
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id)
    const product = data.products.find(x=> x._id === props.match.params.id)
    return <div>{product.name} </div>
}
export default ProductScreen;