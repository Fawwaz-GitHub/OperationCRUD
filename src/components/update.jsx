import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Update() {

    let navigate = useNavigate();

    useEffect (()=>{
        setID(localStorage.getItem('id'))
        setFirstName(localStorage.getItem('firstname'))
        setLastName(localStorage.getItem('lastname'))
        setCheckbox(localStorage.getItem('checkbox'))
    }, [])

    const [id, setID] = useState(null)
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let objects = {
        "firstname" : firstname,
        "lastname" : lastname,
        "checkbox" : checkbox 
      }

    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`https://backendforcrud.herokuapp.com/update/${id}`, objects)
        .then(()=> {
            navigate('/read')
        })
    }

    return (
        <form className='create-form' onSubmit={updateAPIData}>
        <form>
          <label>First Name</label><br></br>
          <input className='box' placeholder='First Name' value={firstname} onChange = {(e) => setFirstName(e.target.value)}/>
        </form>
        <form>
          <label>Last Name</label><br></br>
          <input className='box' placeholder='Last Name' value={lastname} onChange = {(e) => setLastName(e.target.value)}/>
        </form>
        <form>
          <input type="checkbox" checked={checkbox} onChange = {() => setCheckbox(!checkbox)}/>I agree to the Terms and Conditions
        </form>
        <button className='button' type='submit'>Update</button>
      </form>
    )
}