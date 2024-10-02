import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/goldeng/'

const CompEditUser = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    // Procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            name: name,
            lastname: lastname,
            email: email,
        })
        navigate('/')
    }

    // Función getUserById memorizada con useCallback para evitar la advertencia
    const getUserById = useCallback(async () => {
        const res = await axios.get(URI + id)
        setName(res.data.name)
        setLastname(res.data.lastname)
        setEmail(res.data.email)
    }, [id]); // Dependencia de 'id'

    useEffect(() => {
        getUserById();
    }, [getUserById]); // Dependencia de 'getUserById'

    return (
        <div>
            <h3>Editar Datos del Usuario</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Editar</button>
            </form>
        </div>
    )
}

export default CompEditUser;
