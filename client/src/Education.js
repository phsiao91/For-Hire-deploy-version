import React, {useState, useEffect} from "react";
// import DatePicker from 'react-date-picker';
import { useHistory } from "react-router-dom";


function Education() {

    const history = useHistory()

    let next = () => {
        let path = "/languages"
        history.push(path)
    }

    let back = () => {
        let path = "/workhistories"
        history.push(path)
    }

    const [school, setSchool] = useState("")
    const [degree, setDegree] = useState("")
    const [start_date, setStartDate] = useState("")
    const [end_date, setEndDate] = useState("")
    const [quote, setQuote] = useState([])



    const handleSubmit = (e) => {
        e.preventDefault()
        // const wh = {title,
        //     company,
        //     start_date,
        //     endDate}
        //     console.log(wh)
            fetch("/educations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    school,
                    degree,
                    start_date,
                    end_date
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    .then(setSchool(""), setDegree(""), setStartDate(""), setEndDate(""))
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

    console.log(quote)



    return(

        <div>
            
            <div className="card">
                <h2>Education</h2>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="school">school</label>
                            <input 
                                type="text"
                                name="school"
                                value={school}
                                onChange={(e) => setSchool(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="degree">degree</label>
                            <input 
                                type="text"
                                name="degree"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="start_date">start date</label>
                            <input 
                                type="date"
                                name="address"
                                value={start_date}
                                onChange={(e) => setStartDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="end_date">end date</label>
                            <input 
                                type="date"
                                name="phone"
                                value={end_date}
                                onChange={(e) => setEndDate(e.target.value)}/>
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

export default Education