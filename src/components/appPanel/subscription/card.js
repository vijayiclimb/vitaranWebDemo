import React from 'react'
import './styles/SubMgtcard.scss'
import { useSelector } from 'react-redux'

const Card = () => {
    const users = useSelector(state => state.subMgt)
    


    return (
        <div className="SubMgcard_Container">
           <div className="SubMgCards_section">
                    <div className="SubMgcard_value">
                     <label className="SubMgcardvalue">{users.SubscriberCount.All}</label>
                    </div>
                    <div className="SubMgcard_title">
                    <label>All</label>
                    </div>
                </div>
                <div className="SubMgCards_section">
                    <div className="SubMgcard_value">
                     <label>{users.SubscriberCount.NeverActive}</label>
                    </div>
                    <div className="SubMgcard_title">
                    <label>Never Active</label>
                    </div>
                </div>
                <div className="SubMgCards_section">
                    <div className="SubMgcard_value">
                     <label>{users.SubscriberCount.Active}</label>
                    </div>
                    <div className="SubMgcard_title">
                    <label>Active</label>
                    </div>
                </div>
                <div className="SubMgCards_section">
                    <div className="SubMgcard_value">
                     <label>{users.SubscriberCount.Applied}</label>
                    </div>
                    <div className="SubMgcard_title">
                    <label>Applied</label>
                    </div>
                </div>
              

                <div className="SubMgCards_section">
                    <div className="SubMgcard_value">
                     <label>{users.SubscriberCount.Expired}</label>
                    </div>
                    <div className="SubMgcard_title">
                    <label>Expired</label>
                    </div>
                </div>
        </div>
    )
}

export default Card
