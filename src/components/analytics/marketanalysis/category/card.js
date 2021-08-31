import React from 'react'
import './styles/card.scss'

const Card = ({role}) => {
    return (
        <div className="first_section">
                  <div className="card__product">
                    <label className="card_title">GOLD FLAKE KINGS</label>
                    <div className="card_details">
                        <div className="card_detail">
                            <label className="card_detail_value">59</label>
                            <label className="card_detail_title">No.of {role}</label>
                        </div>
                        <div className="card_detail">
                            <label className="card_detail_value_middle">59</label>
                            <label className="card_detail_title_middle">Average Value Per Transaction</label>
                        </div>
                        <div className="card_detail">
                            <label className="card_detail_value">59</label>
                            <label className="card_detail_title">Active User</label>
                        </div>
                    </div>
                </div>
                
                <div className="card_middle">
                    <label className="card_middle_title">GOLD FLAKE KINGS</label>
                    <div className="card_middle_details">
                        <div className="card_middle_detail">
                            <label className="card_middle_detail_value">59</label>
                            <label className="card_middle_detail_title">No.of {role}</label>
                        </div>
                        <div className="card_middle_detail">
                            <label className="card_middle_detail_value_middle">59</label>
                            <label className="card_middle_detail_title_middle">Average Value Per Transaction</label>
                        </div>
                        <div className="card_middle_detail">
                            <label className="card_middle_detail_value">59</label>
                            <label className="card_middle_detail_title">Active Users</label>
                        </div>
                    </div>
                </div>

                <div className="card__product">
                    <label className="card_title">GOLD FLAKE KINGS</label>
                    <div className="card_details">
                        <div className="card_detail">
                            <label className="card_detail_value">59</label>
                            <label className="card_detail_title">No.of {role}</label>
                        </div>
                        <div className="card_detail">
                            <label className="card_detail_value_middle">59</label>
                            <label className="card_detail_title_middle">Average Value Per Transaction</label>
                        </div>
                        <div className="card_detail">
                            <label className="card_detail_value">59</label>
                            <label className="card_detail_title">Active Users</label>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Card
