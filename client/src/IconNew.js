import React, {useState} from "react";
import {faBiking, faPlane, faBook, faFutbol, faGamepad, faMusic, faHiking, faDumbbell, faRunning, faSwimmer, faSnowboarding, faRibbon, faCamera, faPalette, faChess, faFootballBall, faTableTennis, faBowlingBall, faPuzzlePiece, faSkiing, faSkating, faMotorcycle, faCar, faFlask, faChurch, faChartLine, faCampground, faHandHoldingHeart, faTheaterMasks, faPaintBrush, faDog } from '@fortawesome/free-solid-svg-icons'
import { faXbox, faPlaystation, faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Icon from "./Icon";


function IconNew({iconToProcess}) {

    console.log(iconToProcess)

    const newIcon = [
        {realIcon: faFutbol, textIcon: "faFutbol" },
        {realIcon: faHiking, textIcon: "faHiking" },
        {realIcon: faGamepad, textIcon: "faGamepad" },
        {realIcon: faMusic, textIcon: "faMusic" },
        {realIcon: faBiking, textIcon: "faBiking" },
        {realIcon: faPlane, textIcon: "faPlane" },
        {realIcon: faBook, textIcon: "faBook" },
        {realIcon: faDumbbell, textIcon: "faDumbbell" },
        {realIcon: faRunning, textIcon: "faRunning" },
        {realIcon: faSwimmer, textIcon: "faSwimmer" },
        {realIcon: faSnowboarding, textIcon: "faSnowboarding" },
        {realIcon: faRibbon, textIcon: "faRibbon" },
        {realIcon: faCamera, textIcon: "faCamera" },
        {realIcon: faChess, textIcon: "faChess" },
        {realIcon: faPalette, textIcon: "faPalette" },
        {realIcon: faXbox, textIcon: "faXbox" },
        {realIcon: faFootballBall, textIcon: "faFootballBall" },
        {realIcon: faTableTennis, textIcon: "faTableTennis" },
        {realIcon: faBowlingBall, textIcon: "faBowlingBall" },
        {realIcon: faPlaystation, textIcon: "faPlaystation" },
        {realIcon: faPuzzlePiece, textIcon: "faPuzzlePiece" },
        {realIcon: faSkiing, textIcon: "faSkiing" },
        {realIcon: faSkating, textIcon: "faSkating" },
        {realIcon: faMotorcycle, textIcon: "faMotorcycle" },
        {realIcon: faCar, textIcon: "faCar" },
        {realIcon: faFlask, textIcon: "faFlask" },
        {realIcon: faChurch, textIcon: "faChurch" },
        {realIcon: faChartLine, textIcon: "faChartLine" },
        {realIcon: faCampground, textIcon: "faCampground" },
        {realIcon: faHandHoldingHeart, textIcon: "faHandHoldingHeart" },
        {realIcon: faBitcoin, textIcon: "faBitcoin" },
        {realIcon: faEthereum, textIcon: "faEthereum" },
        {realIcon: faTheaterMasks, textIcon: "faTheaterMasks" },
        {realIcon: faPaintBrush, textIcon: "faPaintBrush" },
        {realIcon: faDog, textIcon: "faDog" }
    ]

    const mapHobbies = () => {
        let mappedIcons = newIcon.map(eachIcon =>{ 
            
            // console.log(eachIcon)
            if (eachIcon.textIcon == iconToProcess.description){
                return(  
                    <div className="li_wrap">
                        <div className="icon">
                            <FontAwesomeIcon icon={eachIcon.realIcon}/>
                        </div>
                    </div>
                )
            }
        })

        return mappedIcons
        
    }

    // const mapAllHobbies = () => {
    //     let mappedHobbies = newIcon.map(eachHobby => {
    //         console.log(newIcon)
    //         return( <Icon iconNew={eachHobby.textIcon}/>)
    //     })
    //     return mappedHobbies
    // }

    return(
        <div>
            {mapHobbies()}
        </div>
    )
}

export default IconNew;