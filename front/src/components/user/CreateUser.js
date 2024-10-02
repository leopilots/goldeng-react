import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// npm install bcryptjs (para encriptar password)
const URI = 'http://localhost:8000/goldeng/'

const CompCreateUser = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {name: name, lastname:lastname, email:email, password:password})
        navigate('/')
    }   

    return (
        <div>
           <h3>Create un Nuevo Registro de Cuenta</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                    <label className='form-label'>Apellido</label>
                    <input
                        value={lastname}
                        onChange={ (e)=> setLastname(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div> 
                 <div className='mb-3'>
                    <label className='form-label'>Correo Electrónico</label>
                    <input
                        value={email}
                        onChange={ (e)=> setEmail(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>
                 <div className='mb-3'>
                    <label className='form-label'>Contraseña</label>
                    <input
                        value={password}
                        onChange={ (e)=> setPassword(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>  
                 <button type='submit' className='btn btn-primary'>Registro</button>                  
           </form>
        </div>
    )
}

export default CompCreateUser