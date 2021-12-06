import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App'

const Product = ({imageUrl, title,price,productUrl})=> {
    return (<article className={"phone"}>
        <img src={imageUrl} alt={"**"+ title + "**"}/>
        <h6/>
        <a href={productUrl} target={"_blank"} rel={"noreferrer"}>{title}</a>
        <h4>{"$ " + price}</h4>
    </article>);
}
ReactDOM.render(<App/>,document.getElementById('root'));
export default Product;