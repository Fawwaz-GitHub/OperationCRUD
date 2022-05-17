import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <>
        <div className='subtopic'>
            <div>
                <h1 className='main-header'>React Crud Operations</h1>
            </div>

            <div>
                <Link to='/create'>
                    <h3>Create An Account</h3>
                </Link>
                <Link to='/read'>
                    <h3>Display All Account</h3>
                </Link> 
            </div>   
        </div>
        </>
    )
}