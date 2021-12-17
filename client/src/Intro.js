import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Intro() {

    const history = useHistory()

    const next = () => {
        let path = "/workhistories"
        history.push(path)
    }

    let back = () => {
        let path = "/bios"
        history.push(path)
    }

    const [summary, setSummary] = useState("")
    const [quote, setQuote] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/introductions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    summary
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    .then(setSummary(""))
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
            <div className="card-1">
                <h2>Summary</h2>
                <div className="row-1">
                    <div className="col-1">
                        <div className="form-group-1">
                            <label htmlFor="summary">About Me</label>
                            <input 
                                type="text"
                                name="summary"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}/>
                        </div>
                    </div>
                    <input className="odd" type="submit" onClick={handleSubmit} value="Submit"></input>
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

export default Intro