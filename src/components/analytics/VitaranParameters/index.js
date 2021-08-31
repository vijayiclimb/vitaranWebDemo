import React from 'react'
import BidSection from './BidSection'
import ParametersCard from './card'
import NoOfBids from './graphs/NoOfBids'
import NoOfOrders from './graphs/NoOfOrders'
import OrderSection from './graphs/OrderSection'
import OrderVsBid from './graphs/OrderVsBid'
import './styles/index.scss'
import UserBidTable from './UserBidTable'
import VitaranAvsar from './VitaranAvsar'
import VitaranLabh from './VitaranLabh'
import VitaranParameterTableSection from './VitaranParameterTableSection'

const VitaranParameter = () => {
    return (
        <div className="ParamterContainer">
            <ParametersCard />
            <NoOfOrders/>
            <NoOfBids/>
            <OrderVsBid/>
            <OrderSection/>
            <BidSection/>
            <UserBidTable/>
            <VitaranLabh/>
            <VitaranAvsar/>
            <VitaranParameterTableSection/>
        </div>
    )
}

export default VitaranParameter
