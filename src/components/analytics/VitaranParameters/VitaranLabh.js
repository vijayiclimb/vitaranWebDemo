import React from 'react'
import VitaranLabhGraph from './graphs/VitaranLabhGraph'
import VitaranLabhCard from './VitaranLabhCard';
import './styles/VitaranLabh.scss';

const VitaranLabh = () => {
    return (
        <div className="LabhContainer">
        <label className="LabhTitle">Vitaran Labh</label>
        <VitaranLabhCard/>
        <VitaranLabhGraph/>
            
        </div>
    )
}

export default VitaranLabh
