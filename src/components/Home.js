import React from "react";
function Home() {
    return(
        <div className={"wrapper"}>
            <div className={"img-wrapper item"}>
                <img src={"https://eagle786llc.com/wp-content/uploads/2021/01/Apple-iPhone-11-1-500x500-1.jpg"}/>
            </div>
            <div className={"text-wrapper item"}>
                <span>I-Phone 10 : $1000</span>
            </div>
            <div className={"btn-wrapper item"}>
                <button>Add To Cart</button>
            </div>
            <div className={"cart-wrapper"}>
                <img src={"https://img.freepik.com/premium-vector/vector-shopping-cart-icon-paper-sticker-with-shadow-colored-shopping-symbol-isolated_118339-1774.jpg?w=2000"}/>
            </div>
        </div>
    )
}
export default Home