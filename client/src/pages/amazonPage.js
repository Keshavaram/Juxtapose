import React from 'react'
import ReactDOM from "react-dom";
import {searchAmazon} from "unofficial-amazon-search";

import Product from '../index'

import EbayPage from './ebayPage'
import HomePage from "./homepage";

class AmazonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                amazonData: [],
                query: ""
            }
        this.getData = this.getData.bind(this);
        this.recordQuery = this.recordQuery.bind(this);
    }

    getData() {
        searchAmazon(this.state.query).then(data => {
            this.setState({
                amazonData: data.searchResults
            })
        })
    }

    recordQuery(event)
    {
        this.state.query = event.target.value
    }

    render() {
        return (
            <section>
                <div className={"topBar"}>
                    <button id={"amazonBtn"}
                            className={"generalBtn"}
                            onClick={() => goToHome()}>
                        Home
                    </button>
                    <button id={"ebayBtn"}
                            className={"generalBtn"}
                            onClick={() => goToEbay()}>
                        Ebay
                    </button>
                    <button id={"logOut"}
                            onClick={()=>logOut()}>
                        Log Out
                    </button>
                    <header id={"heading"}>{"Juxtapose"}</header>
                </div>
                <input type={"search"}
                       className={"searchBar"}
                       onChange={this.recordQuery}
                       placeholder={"Search in Amazon"}/>
                <input type={"submit"}
                       value={"Search"}
                       className={"compareBtn"}
                       onClick={() => this.getData()}/>
                {
                    this.state.amazonData.map((each) => {
                        console.log(each)
                        try {
                            return <Product imageUrl={each.imageUrl}
                                            title={each.title}
                                            price={each.prices[0].price}
                                            productUrl={"https://www.amazon.com" + each.productUrl}/>
                        } catch (TypeError) {
                            return <Product imageUrl={each.imageUrl}
                                            title={each.title}
                                            price={"Multiple Prices!!"}
                                            productUrl={"https://www.amazon.com" + each.productUrl}/>
                        }
                    })
                }
            </section>
        )
    }
}

function goToEbay() {
    ReactDOM.render(<EbayPage/>, document.getElementById("root"))
}

function goToHome() {
    ReactDOM.render(<HomePage/>,document.getElementById("root"));
}
function logOut()
{
    window.location.href = '/Login'
}

export default AmazonPage