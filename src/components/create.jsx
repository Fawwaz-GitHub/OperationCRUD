import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    let objects = {
      "firstname" : firstName,
      "lastname" : lastName,
      "checkbox" : checkbox 
    }
    const postData = (e) => {
      e.preventDefault(); //learnt
      console.log(objects);
      axios.post('https://62625123327d3896e284be92.mockapi.io/crud', objects)
      .then(res => {
        console.log("Posted");
        navigate('/read')
      })
      .catch(err => {
        console.log(err)
      })
    }

    return (
  <form className='create-form' onSubmit={postData}>
    <form>
      <label>First Name</label><br></br>
      <input className='box' placeholder='First Name' onChange = {(e) => setFirstName(e.target.value)}/>
    </form>
    <form>
      <label>Last Name</label><br></br>
      <input className='box' placeholder='Last Name' onChange = {(e) => setLastName(e.target.value)}/>
    </form>
    <form>
      <input type="checkbox" onChange = {() => setCheckbox(!checkbox)}/>I agree to the Terms and Conditions
    </form>
    <button className='button' type='submit'>Submit</button>
  </form>
    )
}

export default Create