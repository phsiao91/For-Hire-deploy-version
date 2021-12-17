import React, {useState, useEffect} from "react";
// import DatePicker from 'react-date-picker';
import { useHistory } from "react-router-dom";


function WorkHistory() {

    const history = useHistory()

    let next = () => {
        let path = "/educations"
        history.push(path)
    }

    let back = () => {
        let path = "/introductions"
        history.push(path)
    }

    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [start_date, setStartDate] = useState(new Date());
    const [end_date, setEndDate] = useState("")
    const [details, setDetails] = useState("")
    const [quote, setQuote] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        // const wh = {title,
        //     company,
        //     start_date,
        //     endDate}
        //     console.log(wh)
            fetch("/workhistories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    title,
                    company,
                    start_date,
                    end_date
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    .then(setTitle(""), setCompany(""), setStartDate(""), setEndDate(""))
                    }else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                })
    }

    const taskSubmit = (e) => {
        e.preventDefault()
        fetch("/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                details
            }),
        }).then(res => {
            if (res.ok) {
                return res.json()
                .then(setDetails(""))
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


    return(
    <div>
        <div className="card">
                <h2>Work History</h2>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="title">title</label>
                            <input 
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="company">company</label>
                            <input 
                                type="text"
                                name="company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}/>
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
            <br></br>
            <br></br>
            <div className="card-1">
                <div className="row-1">
                    <div className="col-1">
                        <div className="form-group-1">
                            <label htmlFor="details">task</label>
                            <input 
                                type="text"
                                name="details"
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}/>
                        </div>
                    </div>
                    <input className="odd" type="submit" onClick={taskSubmit} value="Submit"></input>
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

export default WorkHistory