import React from 'react'
import VitaranAvsarGraph from './graphs/VitaranAvsarGraph'
import VitaranAvsarCard from './VitaranAvsarCard';
import './styles/VitaranAvsar.scss';

const VitaranAvsar = () => {
    return (
        <div className="AvsarContainer">
        <label className="AvsarTitle">Vitaran Avsar</label>
        <VitaranAvsarCard/>
        <VitaranAvsarGraph/>
            
        </div>
    )
}

export default VitaranAvsar
