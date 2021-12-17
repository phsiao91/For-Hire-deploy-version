import React, {useState} from "react";

function Account({user}) {

    console.log(user.id)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const updateAccount = (e) => {
        e.preventDefault()
        fetch(`/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
    },
        credentials: 'include',
        body: JSON.stringify({
            username,
            password
    }),
})
    .then(res => {
        if (res.ok) {
            return res.json()
            }else {
            return res.json().then(errors => Promise.reject(errors))
        }
    })

}

const handleDeleteUserAccount =(e)=> { 
    e.preventDefault()
    // console.log(sythEvent)
    // console.log("In handleUserLogin")
   


    fetch(`/users/${user.id}`, {

      method: "DELETE"

    })
    .then(r => r.json())
    .then(whoDeletedTheirAccount =>{  console.log("BYEFELICA  >>  ", whoDeletedTheirAccount)  
    })      
  }

    return(
        <div>
            <div className="card">
                <h2>Update Account</h2>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="username">username</label>
                            <input 
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="password">password</label>
                            <input 
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <input type="submit" onClick={updateAccount} value="Update"></input>
                    {/* <input type="submit" onClick={handleDeleteUserAccount} value="Delete Account"></input> */}
                </div>
            </div>
        </div>
    )
}

export default Account;