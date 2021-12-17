import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

function Social() {

    const [quote, setQuote] = useState([])
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [twitter, setTwitter] = useState("")
    const [linkedin, setLinkedin] = useState("")

    const history = useHistory()

    let next = () => {
        let path = "/hobbies"
        history.push(path)
    }

    let back = () => {
        let path = "/languages"
        history.push(path)
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

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/socials", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    facebook,
                    instagram,
                    twitter,
                    linkedin
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    .then(setFacebook(""), setInstagram(""), setTwitter(""), setLinkedin(""))
                    }else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                })
    }



    return(
        <div>
            <div className="card">
                <h2>Social Links</h2>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="facebook">facebook</label>
                            <input 
                                type="text"
                                name="facebook"
                                value={facebook}
                                onChange={(e) => setFacebook(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="instagram">instagram</label>
                            <input 
                                type="text"
                                name="instagram"
                                value={instagram}
                                onChange={(e) => setInstagram(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="twitter">twitter</label>
                            <input 
                                type="text"
                                name="twitter"
                                value={twitter}
                                onChange={(e) => setTwitter(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="linkedin">linkedin</label>
                            <input 
                                type="text"
                                name="linkedin"
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}/>
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

export default Social