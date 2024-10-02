import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/goldeng/'

const CompShowUsers = () => {
    const [users, setUser] = useState([])
    useEffect( ()=>{
        getUsers()
    },[])

    //procedimineto para mostrar todos los blogs
    const getUsers = async () => {
        const res = await axios.get(URI)
        setUser(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteUser = async (id) => {
       await axios.delete(`${URI}${id}`)
       getUsers()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Crear un nuevo Registro</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo Electrónico</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ( (user) => (
                                <tr key={ user.id}>
                                    <td> { user.name } </td>
                                    <td> { user.lastname } </td>
                                    <td> { user.email } </td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteUser(user.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    );
}

export default CompShowUsers