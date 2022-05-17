import axios from 'axios'
import React, {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'


export default function Read() {

    const [APIData, setAPIData] = useState([])

    useEffect (()=>{
        axios.get('https://62625123327d3896e284be92.mockapi.io/crud')
        .then((res)=>{
            setAPIData(res.data)
        })
    }, [])

    const getData = () => {
        axios.get('https://62625123327d3896e284be92.mockapi.io/crud')
        .then((getData) => {
            setAPIData(getData.data)
        })
    }

    const onDelete = (id) => {
        axios.delete(`https://62625123327d3896e284be92.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        })
    }

    const setData = (data) => {
        let { id , firstname , lastname , checkbox } = data;
        localStorage.setItem('id', id);
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('checkbox', checkbox)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Checked</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data)=> {
                        return(
                    <tr>
                        <td>{data.firstname}</td>
                        <td>{data.lastname}</td>
                        <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                        <Link to='/update'>
                        <td><button onClick={()=> setData(data)}>Update</button></td>
                        </Link>
                        <td><button onClick={() => onDelete(data.id)}>Delete</button></td>
                    </tr>
                        )})}
                </tbody>
            </table>
        </div>
    )
}