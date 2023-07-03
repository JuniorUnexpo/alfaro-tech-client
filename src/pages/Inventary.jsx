

export const Inventary = function ({ }) {
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
                        <tr>
                            <td>1</td>
                            <td>Cautín</td>
                            <td>Uni-T</td>
                            <td>AF5253</td>
                            <td>9</td>
                            <td>5</td>
                            <td>45</td>
                            <td>
                                <div className='btn-group'>
                                    <button className='btn btn-danger'>Actualizar</button>
                                    <button className='btn btn-danger'>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Multímetro</td>
                            <td>Fluke</td>
                            <td>Super Multimetro 3000</td>
                            <td>12</td>
                            <td>10</td>
                            <td>120</td>
                            <td>
                                <div className='btn-group'>
                                    <button className='btn btn-danger'>Actualizar</button>
                                    <button className='btn btn-danger'>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Destronillador</td>
                            <td>Fluke</td>
                            <td>Destronillador inador</td>
                            <td>8</td>
                            <td>4</td>
                            <td>32</td>
                            <td>
                                <div className='btn-group'>
                                    <button className='btn btn-danger'>Actualizar</button>
                                    <button className='btn btn-danger'>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}