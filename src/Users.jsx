import { useEffect, useState } from "react";
import './Users.css';
import User from "./User";


export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))

    }, [])
    return(
        <div className="box">
            <h1>Effect Manage</h1>
            <h3>users: {users.length}</h3>
            {
                users.map(user => <User user = {user}></User>)
            }
        </div>
    )
}

/**
 * 1. declare one state to load data
 * 2. declare effect. 
 *  i) 2ta parameter nibe 1st callback funtion and 2nd dependency. 1st time data load korte hole akta [] empty array dite hobe 2nd parameter a. 
 * 3. fetch data from json api as like js
 * 4. data ta ke setUser ar modde set kore dibo
 */