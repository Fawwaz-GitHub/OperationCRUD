import axios from 'axios'
import React, {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'


export default function Read() {

    const [APIData, setAPIData] = useState([])

    useEffect (()=>{
        axios.get('https://backendforcrud.herokuapp.com/read')
        .then((res)=>{
            setAPIData(res.data)
        })
    }, [])

    const getData = () => {
        axios.get('https://backendforcrud.herokuapp.com/read')
        .then((getData) => {
            setAPIData(getData.data)
        })
    }

    const onDelete = (id) => {
        axios.delete(`https://backendforcrud.herokuapp.com/read/${id}`)
        .then(()=>{
            getData();
        })
    }

    const setData = (data) => {
        let { _id , firstname , lastname , checkbox } = data;
        localStorage.setItem('id', _id);
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
                        <td><button onClick={() => onDelete(data._id)}>Delete</button></td>
                    </tr>
                        )})}
                </tbody>
            </table>
        </div>
    )
}