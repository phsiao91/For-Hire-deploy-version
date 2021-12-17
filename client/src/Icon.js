import React, {useState} from "react";
// import { useHistory } from "react-router-dom";
// import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Hobby from "./Hobby";


function Icon ({ iconToRender }) {
    console.log(iconToRender.textIcon)

    const [description, setDescription] = useState("")


    const hobbyClick = (sythEvent) => {
        // <FontAwesomeIcon class="icon" icon={faFutbol}/>
        console.log(sythEvent)

        // console.log(iconToRender.iconName)
        sythEvent.preventDefault()
        // console.log(e.target.value)
            fetch("/hobbies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                     description: iconToRender.textIcon }
                    
                ),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    .then(setDescription(""))
                    }else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                })

    }


    return(
        <div onClick={hobbyClick}>
            {/* <h2>{iconToRender.iconName}</h2> */}
            <FontAwesomeIcon className="icon" icon={iconToRender.realIcon}/>
            {/* <FontAwesomeIcon className="icon" icon={iconNew.realIcon}/> */}

            {/* <Hobby renderHobby={hobbyClick}/> */}
        </div>
    )
}


export default Icon


