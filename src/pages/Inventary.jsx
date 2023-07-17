import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerInventario, inventarioSelector } from '../redux/slices/inventarioSlice'
import axios from 'axios'

export const Inventary = function ({ }) {
    const dispatch = useDispatch()
    const { loading, success, results } = useSelector(inventarioSelector)
    const [change, setChange] = useState({})


    useEffect(() => {
        dispatch(obtenerInventario())
    }, [])


    const eliminar = function(id){
        const claveTrabajador = prompt('Ingrese la clave de trabajador: ')
        axios
            .delete(`http://localhost:5000/api/v1/inventario/eliminar/${id}/${claveTrabajador}`,)
            .then(() => dispatch(obtenerInventario()))
            .catch(console.log)
    }

    const actualizar = function(fila){
        setChange({
            id: fila.id,
            nombre: fila.nombre,
            marca: fila.marca,
            modelo: fila.modelo,
            cantidad: fila.cantidad,
            precio: fila.precio
        })
    }

    const handleChange = function(e){
        setChange({
            [e.target.name]: e.target.value
        })
    }

    const enviarDatos = function(e){
        e.preventDefault()
        const claveTrabajador = prompt('Ingrese la clave de trabajador: ')
        console.log(change)
        axios
            .put(`http://localhost:5000/api/v1/inventario/editar/${change.id}/${claveTrabajador}`, change)
            .then(() => dispatch(obtenerInventario()))
            .catch(console.log)
    }


    return (
        <div>
            <div className='container mt-5 pt-5'>
                <div className='mb-3 d-flex'>
                    <h1 className='fs-1 mx-auto'>Gestión de inventario</h1>
                </div>
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Marca</th>
                            <th scope='col'>Modelo</th>
                            <th scope='col'>Cantidad</th>
                            <th scope='col'>Precio</th>
                            <th scope='col'>Subtotal</th>
                            <th scope='col'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !loading && success && results.map(result => (
                                <tr key={result.id}>
                                    <td>{result.id}</td>
                                    <td>{result.nombre}</td>
                                    <td>{result.marca}</td>
                                    <td>{result.modelo}</td>
                                    <td>{result.cantidad}</td>
                                    <td>{result.precio}</td>
                                    <td>{result.cantidad * Number(result.precio)}</td>
                                    <td>
                                        <div className='btn-group'>
                                            <button onClick={() => actualizar(result)} class="btn btn-success" data-bs-target="#modal" data-bs-toggle="modal">Actualizar</button>
                                            <button onClick={() => eliminar(result.id)} className='btn btn-danger'>Eliminar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>





            <div class="modal fade" id="modal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Edita los campos que desees</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                        <form onSubmit={enviarDatos}>
                            <fieldset>
                                <div className='row row-gap-1'>
                                    <div className='form-group col'>
                                        <input
                                            name="nombre"
                                            value={change?.nombre}
                                            onChange={handleChange}
                                            type="text"
                                            className='form-control'
                                            id='exampleInputEmail1'
                                            aria-describedby='emailHelp'
                                            placeholder='Nombre'
                                            />
                                    </div>
                                    <div className='form-group col'>
                                        <input
                                            name="marca"
                                            value={change?.marca}
                                            onChange={handleChange}
                                            type="text"
                                            className='form-control'
                                            id='exampleInputEmail1'
                                            aria-describedby='emailHelp'
                                            placeholder='Marca'
                                        />
                                    </div>
                                </div>
                                <div className='mt-3 row row-gap-1'>
                                    <div className='form-group col'>
                                        <input
                                            name="modelo"
                                            value={change?.modelo}
                                            onChange={handleChange}
                                            type='text'
                                            className='form-control'
                                            placeholder='Modelo'
                                            />
                                    </div>
                                    <div className='form-group col'>
                                        <input
                                            name="cantidad"
                                            value={change?.cantidad}
                                            onChange={handleChange}
                                            type='text'
                                            className='form-control'
                                            id='exampleInputPassword1'
                                            placeholder='Cantidad'
                                            />
                                    </div>
                                </div>
                                <div className='mt-3 row row-gap-1'>
                                    <div className='form-group col'>
                                        <input
                                            name="precio"
                                            value={change?.precio}
                                            onChange={handleChange}
                                            type='text'
                                            className='form-control'
                                            placeholder='Precio'
                                        />
                                    </div>
                                    <div className='form-group col'>
                                        <input
                                            value={change?.cantidad * change?.precio}
                                            type='text'
                                            className='form-control'
                                            id='exampleInputPassword1'
                                            placeholder='Subtotal'
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className='row px-3'>
                                    <button className='btn btn-block btn-success my-3'>
                                        Confirmar
                                    </button>
                                </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  



        </div>
    )
}