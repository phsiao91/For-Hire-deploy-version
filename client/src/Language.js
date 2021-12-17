import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

function Language() {

    const history = useHistory()

    let next = () => {
        let path = "/socials"
        history.push(path)
    }

    let back = () => {
        let path = "/educations"
        history.push(path)
    }

    const [expertise, setExpertise] = useState("")
    const [rating, setRating] = useState("")
    const [quote, setQuote] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/languages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    expertise,
                    rating
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    .then(setExpertise(""), setRating(""))
                    }else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                })
    }

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(fetchedQuote => {console.log(fetchedQuote)
            let randomQuote = fetchedQuote[Math.floor(Math.random() * fetchedQuote.length)]

        setQuote(randomQuote)

    })
    }
    useEffect(getQuote, [])

    // console.log(quote)


    return(
        <div>
            <div className="card">
                <h2>Programming Languages</h2>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="expertise">expertise</label>
                            <input 
                                type="text"
                                name="expertise"
                                value={expertise}
                                onChange={(e) => setExpertise(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="rating">rating %</label>
                            <input 
                                type="text"
                                name="rating"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}/>
                        </div>
                    </div>
                    <input type="submit" onClick={handleSubmit} value="Submit"></input>
                </div>
            </div>
            <div className="flow">
                <div class="multi-button">
                    <button onClick={back}>Back</button>
                    <button onClick={next}>Next</button>
                </div>
            </div>
            <div className="blockquote-wrapper">
                <div className="blockquote">
                    <h2>{quote.text}</h2>
                    <h4>{quote.author}</h4>
                </div>
            </div>
        </div>
    )
}

export default Language