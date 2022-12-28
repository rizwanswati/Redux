function Home(props) {
    console.log(props)
    return (
        <div>
            <div className={"over-wrapper"}>
                <img src={"https://eagle786llc.com/wp-content/uploads/2021/01/Apple-iPhone-11-1-500x500-1.jpg"}
                     alt={""}/>

                <div className={"item"}>
                    <button onClick={() => props.addToCartHandler({
                        name: "I-Phone X",
                        price: 1000,
                        qty: 1
                    })}>Add To Cart
                    </button>
                    <button onClick={() => props.removeFromCartHandler()}>Remove From Cart
                    </button>
                </div>

                <div className={"item"}>
                    <span>I-Phone 10 : $1000</span>
                </div>
            </div>
        </div>
    )
}

export default Home