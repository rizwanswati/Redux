function Header(props) {
    console.log("Header", props)
    return (
        <div className={"cart-wrapper"}>

            <img
                src={"https://img.freepik.com/premium-vector/vector-shopping-cart-icon-paper-sticker-with-shadow-colored-shopping-symbol-isolated_118339-1774.jpg?w=2000"}
                alt={""}/>
            <span>{props.Data.length}</span>
        </div>
    )
}

export default Header