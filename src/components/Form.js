import React, {useState} from 'react';
import '../index.css'


function Form(){


    const[user,setUser] = useState({
        name:"",
        email:"",
        phone:""
    })
    
    let name, value
    const handleInputs = (e) => {
        //console.log(e.target)
        name = e.target.name
        value = e.target.value
        //console.log(name+":", value)                     //to print the value
        setUser({...user,[name]:value})
    }

    return (
        /* <form className="form" method="post">
            <label>Name:<input type="text" name="name"  /></label>
            <label>Email:<input type="email" name="email" /></label>
            <label>Phone:<input type="number" name="phone"  /></label>
            <input type="submit" value="Submit" id="button"  />
        </form> */

        <form className="form" method="post">
            <label>Name:<input type="text" name="name" value={user.name} onChange={handleInputs} /></label>
            <label>Email:<input type="email" name="email" value={user.email} onChange={handleInputs} /></label>
            <label>Phone:<input type="tel" name="phone" value={user.phone} onChange={handleInputs} /></label>
            <input type="submit" value="Submit" id="button"  />
        </form>
    )
}


export default Form