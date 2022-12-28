/*
* container binds react with redux
* in other words, binds actions with components
* */

import React from "react";
import Home from "../components/Home";
import {connect} from 'react-redux'
import {addToCart} from "../services/Actions/actions";

/*
* @mapDispatchToProp: When sending data from action to redux store
* @mapStateToProp: when sending data from redux store to any component
* @both as const
* */

const mapStateToProps = state => ({
    //TODO
})

const mapDispatchToProps = dispatch=>({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)