import React from 'react';
import './styles/VitaranParameterTableSection.scss'
import ParameterTable from './ParameterTable'
import ParameterUser from './ParameterUser';

const VitaranParameterTableSection = () => {
    return (
        <div id="VitaranParameterTable" className="ParameterTableContainer">
            <label className="ParameterTableContainerTitle">Vitaran Labh</label>
            <label className="ParameterTableContainerType">Low</label>
            <div className="ParameterWrapper">
                <div className="TableSection">
                    <ParameterTable />
                </div>
                <div className="UserSection">
                   <ParameterUser/>
                </div>
            </div>

        </div>
    )
}

export default VitaranParameterTableSection
