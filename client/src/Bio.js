import React, { useState, useEffect }  from 'react'
// import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
// import {useNavigate} from 'react-router-dom';


function Bio() {

    // const navigate = useNavigate();
    // navigate('/workhistories')

    let history = useHistory()

    let next = () => {
        let path = "/introductions"
        history.push(path)
    }

    let back = () => {
        let path = "/"
        history.push(path)
    }

    // const [bios, setBios] = useState([])
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [github, setGithub] = useState("")
    const [image, setImage] = useState("")
    const [quote, setQuote] = useState([])


    function handleSubmit(e) {
        e.preventDefault()
        // e.target.reset()
            fetch("/bios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    image,
                    name,
                    address,
                    phone,
                    email,
                    github
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    .then(setName(""), setImage(""), setAddress(""), setPhone(""), setEmail("", setGithub("")))
                    }else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                    
                    
                })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     fetch("/bios", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         credentials: "include",
    //         body: JSON.stringify({
    //             image,
    //             name,
    //             address,
    //             phone,
    //             email,
    //             github
    //         })
    //     }).then(res => {
    //         if (res.ok) {
    //             return res.json()
    //             .then(setImage(""), setName(""), setAddress(""), setPhone(""), setEmail("", setGithub("")))
    //         } else {
    //             return( res.json().then(errors => Promise.reject(errors)))
    //         }
    //     })
    // }

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(fetchedQuote => {console.log(fetchedQuote)
            let randomQuote = fetchedQuote[Math.floor(Math.random() * fetchedQuote.length)]

        setQuote(randomQuote)

    })
    }
    useEffect(getQuote, [])

    // let allQuotes = quote[Math.floor(Math.random() * quote.length)];

    console.log(quote)

    // const randomChoice = arr => {
    //     const randIndex = Math.floor(Math.random() * arr.length);
    //     return arr[randIndex];
    // };

//     fetch("https://type.fit/api/quotes")
//         .then(function(response) {
//             return response.json();
//     })
//         .then(function(data) {
//             console.log(data);
//   });




    return(
        <div className="bioForm">
            <div className="card">
                <h2>Bio</h2>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="image">image</label>
                            <input 
                                type="text"
                                name="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="name">name</label>
                            <input 
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="address">address</label>
                            <input 
                                type="text"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="phone">phone</label>
                            <input 
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="email">email</label>
                            <input 
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="github">github</label>
                            <input 
                                type="text"
                                name="github"
                                value={github}
                                onChange={(e) => setGithub(e.target.value)}/>
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

export default Bio;