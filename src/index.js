import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

function Userdemo() {
   const [users, setUser] = useState([]);
   const [loading, setloading] = useState(true);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((data) => {
            setUser(data);
            setloading(false);
         })
         .catch((error) => {
            console.log("Error fetching data:", error);
            setloading(false);
         });
   }, []);
   if(loading){
    return<p>loading</p>;
   }
   return(
    <div>
      <h1>List out the users in API</h1>
      <ul>
        {
          users.map(user=>(
            <li key={user.id}>{user.name},{user.email}</li>
          ))
        }
      </ul>
    </div>
   );
  }
  ReactDOM.render(<Userdemo/>,document.getElementById('root'));