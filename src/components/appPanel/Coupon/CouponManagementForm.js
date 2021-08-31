import React from 'react';
import AddCoupon from './Add';
import './styles/CouponManagementForm.scss';
import UpdateCoupon from './Update';

const CouponManagementForm = ({place}) => {
    return (
        <div className="CouponMgtFormContainer">
            <div  className="CouponMgtFormContainerUpdate">
              <UpdateCoupon place={place}/>
            </div>
            <div  className="CouponMgtFormContainerAdd">
                <AddCoupon place={place}/>
            </div>
        </div>
    )
}

export default CouponManagementForm
