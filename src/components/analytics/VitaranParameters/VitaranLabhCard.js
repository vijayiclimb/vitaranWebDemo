import React from 'react';
import './styles/VitaranLabhCard.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { HashLink as Link } from 'react-router-hash-link';

const VitaranLabhCard = () => {
    const Low = {
        low: "20",
        medium: "30",
        high: "40",
        veryHigh: "50"
    }

    const total = parseInt(Low.low) + parseInt(Low.medium) + parseInt(Low.high) + parseInt(Low.veryHigh);
    console.log(total);

    const lowpercent = 100 * (parseInt(Low.low) / total);
    const mediumpercent = 100 * (parseInt(Low.medium) / total);
    const highpercent = 100 * (parseInt(Low.high) / total);
    const veryhighpercent = 100 * (parseInt(Low.veryHigh) / total);

    const progress = [
        { value: `${Low.low}`, percent: `${lowpercent}`, title: "Low", transaction: "Less than Rs.250" },
        { value: `${Low.medium}`, percent: `${mediumpercent}`, title: "Medium", transaction: "Rs.250-Rs.500" },
        { value: `${Low.high}`, percent: `${highpercent}`, title: "High", transaction: "Rs.501-Rs.1000" },
        { value: `${Low.veryHigh}`, percent: `${veryhighpercent}`, title: "Very High", transaction: "Greater Than 1000" },
    ]


    return (
        <div className="CardContainer">
            <div className="CardWrapper">
                {progress.map((item, index) => (

                    <div className="Cards">
                        <div className="Progress">

                            <CircularProgressbar value={item.percent} text={item.value} styles={buildStyles({
                                rotation: 0,
                                textSize: '26px',
                                pathTransitionDuration: 0.5,
                                pathColor: '#adc2eb',
                                textColor: "#99b3e6",
                                trailColor: '#bfbfbf',
                                backgroundColor: "white",



                            })
                            } />
                        </div>
                        <label className="ProgressTitle"><Link smooth to='#VitaranParameterTable'>{item.title}</Link></label>
                        <label className="ProgressStatus">{item.transaction}</label>

                    </div>
                ))}


            </div>


        </div>
    )
}

export default VitaranLabhCard
