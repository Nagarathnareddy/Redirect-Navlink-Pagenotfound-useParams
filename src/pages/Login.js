import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react';


export default function Login() {
    const [registeredEmail,setregisteredEmail] = useState("narendramodi@gmail.com");
        const [registeredPassword,setregisteredPassword] = useState("merabharathmahaan");

        let history = useHistory()

         const ValidateLogin= async ()=>{

             let dataTosend= new FormData();
             dataTosend.append("registeredEmail:",registeredEmail)
             dataTosend.append("registeredPassword:",registeredPassword)
             dataTosend.append("funcName:","verifyLogin")
             
             let data = await fetch("https://pulse.brninfotech.com/pulse/modules/admin/ValidateLogin.php",{method:"post",body:dataTosend})

              let convertedData = await data.json()
              if(convertedData.loggedIn ==="yes"){
                //alert("succesfully loggedin")
                history.push({pathName:"/dashboard"})
              }
              console.log(convertedData.loggedIn)
         }

    return (
        <div>
            <label>user name:</label>
            <input type="text" value={registeredEmail} onchage={(e)=>setregisteredEmail(e.target.value)} />
            <label>password:</label>
            <input type="password" value={registeredPassword} onChange={(e)=>setregisteredPassword(e.target.value)}/>
            <button onClick={ValidateLogin}>Login</button>
        </div>
    )
}
