import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";



function Home({ user }) {

  const [quote, setQuote] = useState([])


    const history = useHistory()

    const routeChange = () => {
        let path = "/bios"
        history.push(path)
    }

    const login = () => {
      let path = "/login"
      history.push(path)
    }

    const signup = () => {
      let path = "/signup"
      history.push(path)
    }


  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(fetchedQuote => {
        let randomQuote = fetchedQuote[Math.floor(Math.random() * fetchedQuote.length)]

    setQuote(randomQuote)

})
}
useEffect(getQuote, [])

console.log(quote)

    if (user) {
      return (<div className="first">
                {/* <div className="prompt"> */}
                  <h4 className="welcome"> Welcome, {user.username}</h4>
                {/* </div> */}
                <div>
                  <p className="start" onClick={routeChange}>Click here to get started!!!</p>
                  <div className="blockquote-wrapper">
                    <div className="blockquote">
                      <h2>{quote.text}</h2>
                      <h4>{quote.author}</h4>
                    </div>
                  </div>
                </div>
              </div>)
    } else {
      return (
        <div>
              <div className="prompt">
              <div>
                <h1 className="site-name">For Hire!!</h1>
              </div>
                <h3 className="prompt_1">Please </h3>
                <h3 className="prompt_2" onClick={login}>Login </h3>
                <h3 className="prompt_3">or </h3>
                <h3 className="prompt_4" onClick={signup}>SignUp</h3>
              </div>
        </div>
      )
    }
  }
  
  export default Home;