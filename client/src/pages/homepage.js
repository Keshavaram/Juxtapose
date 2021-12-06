import React from "react";
import {searchAmazon} from "unofficial-amazon-search";

import '../index.css';

import AmazonPage from './amazonPage'
import EbayPage from './ebayPage'

import Product from '../index'
import ReactDOM from "react-dom";

let eBay = require("ebay-node-api");
let ebayApi = new eBay({
    clientID: "KeshavRa-Juxtapos-PRD-4e90acf8a-544792ef"
});

class HomePage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
            {
                amazonData : [],
                ebayData : [],
                query : ""
            }
        this.recordQuery = this.recordQuery.bind(this);
        this.getData = this.getData.bind(this);
    }

    getAmazonData()
    {
        console.log("query is : ",this.state.query);
        searchAmazon(this.state.query).then(data =>
        {
            console.log("Data is : ",data.searchResults)
            console.log(data.searchResults)
            this.setState({
                amazonData : data.searchResults
            })
        })
    }

    getEbayData()
    {
        ebayApi.findItemsByKeywords({
            keywords: this.state.query
        }).then(data => {
            data.map((each) => {
                each.searchResult.map((eachItem) => {
                    eachItem.item.map(it => {
                        let temp
                        if(it.pictureURLLarge !== undefined)
                        {
                            temp =
                                {
                                    "title" : it.title[0],
                                    "imageUrl" : it.pictureURLLarge[0],
                                    "price" : it.sellingStatus[0].currentPrice[0].__value__,
                                    "productUrl":it.viewItemURL[0]
                                }
                        } else
                        {
                            temp =
                                {
                                    "title" : it.title[0],
                                    "imageUrl" : it.galleryURL[0],
                                    "price" : it.sellingStatus[0].currentPrice[0].__value__,
                                    "productUrl":it.viewItemURL[0]
                                }
                        }
                        this.state.ebayData.unshift(temp);
                    })
                })
            })
        });
    }

    recordQuery(event)
    {
        this.state.query = event.target.value;
    }

    getData()
    {
        this.getEbayData();
        this.getAmazonData();
    }

    render()
    {
        return (
            <section>
                <div className={"topBar"}>
                    <button id={"amazonBtn"}
                            className={"generalBtn"}
                            onClick={goToAmazon}>
                        Amazon
                    </button>
                    <button id={"ebayBtn"}
                            className={"generalBtn"}
                            onClick={goToEbay}>
                        Ebay
                    </button>
                    <button id={"logOut"}
                            onClick={()=>logOut()}>
                        Log Out
                    </button>
                    <header id={"heading"}>{"Juxtapose"}</header>
                </div>
                <input  type={"search"}
                        className={"searchBar"}
                        onChange={this.recordQuery}
                        placeholder={"Search for any product"}/>
                <input type={"submit"}
                       value={"Compare"}
                       className={"compareBtn"}
                       onClick={()=>this.getData()}/>
                <section className={"phoneList"}>
                    <section>
                        {
                            this.state.amazonData.map((each) => {
                                try
                                {
                                    return <Product imageUrl={each.imageUrl}
                                                    title={each.title}
                                                    price={each.prices[0].price}
                                                    productUrl={"https://www.amazon.com" + each.productUrl}/>
                                } catch(TypeError)
                                {
                                    return <Product imageUrl={each.imageUrl}
                                                    title={each.title}
                                                    price={"Multiple Prices!!"}
                                                    productUrl={"https://www.amazon.com" + each.productUrl}/>
                                }
                            })
                        }
                    </section>
                    <section>
                        {
                            this.state.ebayData.map((eachItem) =>
                            {
                                return <Product title={eachItem.title}
                                                imageUrl={eachItem.imageUrl}
                                                price={eachItem.price}
                                                productUrl={eachItem.productUrl}/>
                            })
                        }
                    </section>
                </section>
            </section>

        )
    }
}

function goToAmazon() {
    ReactDOM.render(<AmazonPage/>,document.getElementById("root"));
}
function goToEbay() {
    ReactDOM.render(<EbayPage/>,document.getElementById("root"))
}
function logOut()
{
    window.location.href = '/Login'
}

export default HomePage