/*
* container binds react with redux
* in other words, binds actions with components
* */

import {connect} from 'react-redux'
import Header from "../components/Header";

/*
* @mapDispatchToProp: When sending data from action to redux store
* @mapStateToProp: when sending data from redux store to any component
* @both as const
* */

const mapStateToProps = state => ({
    Data: state.cartItems.cartData
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)