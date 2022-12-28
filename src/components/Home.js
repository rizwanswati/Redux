import React from "react";
function Home() {
    return(
        <div>
        <div className={"over-wrapper"}>
                <img src={"https://eagle786llc.com/wp-content/uploads/2021/01/Apple-iPhone-11-1-500x500-1.jpg"}/>

            <div className={"item"}>
                <button>Add To Cart</button>
            </div>

            <div className={"item"}>
                <span>I-Phone 10 : $1000</span>
            </div>
        </div>
            <div className={"cart-wrapper"}>
                <img src={"https://img.freepik.com/premium-vector/vector-shopping-cart-icon-paper-sticker-with-shadow-colored-shopping-symbol-isolated_118339-1774.jpg?w=2000"}/>
            </div>
        </div>
    )
}
export default Home