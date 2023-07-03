



export const RepairRegister = function({  }){


    return (
        <>
            <div>
                <h2 className='mb-5'>
                    Nuevo registro de reparación
                </h2>
            </div>
            <form>
                <fieldset>
                    <div>
                        <p className='fw-semibold'>
                            Datos del cliente
                        </p>
                    </div>
                    <div className='row row-gap-1'>
                        <div className='form-group col'>
                            <input
                                type='email'
                                className='form-control'
                                id='exampleInputEmail1'
                                aria-describedby='emailHelp'
                                placeholder='Nombre'
                            />
                        </div>
                        <div className='form-group col'>
                            <input
                                type='email'
                                className='form-control'
                                id='exampleInputEmail1'
                                aria-describedby='emailHelp'
                                placeholder='Apellido'
                            />
                        </div>
                    </div>
                    <div className='mt-3 row row-gap-1'>
                        <div className='form-group col'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Cédula'
                            />
                        </div>
                        <div className='form-group col'>
                            <input
                                type='text'
                                className='form-control'
                                id='exampleInputPassword1'
                                placeholder='Nro. Teléfono'
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset>

                    <div className='mt-5'>
                        <p className='fw-semibold'>
                            Datos del equipo
                        </p>
                    </div>
                    <div className='row row-gap-1'>
                        <div className='form-group col'>
                            <input
                                type='email'
                                className='form-control'
                                id='exampleInputEmail1'
                                aria-describedby='emailHelp'
                                placeholder='Nombre'
                            />
                        </div>
                        <div className='form-group col'>
                            <input
                                type='email'
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
                                type='text'
                                className='form-control'
                                placeholder='Modelo'
                            />
                        </div>
                        <div className='form-group col'>
                            <input type='checkbox' className='btn-check' id='btncheck1' />
                            <label class="btn btn-outline-primary d-block" for="btncheck1">¿Es cliente frecuente?</label>
                        </div>
                    </div>
                    <div className='mt-3 row row-gap-1'>
                        <div className='form-group col'>
                            <input
                                type='text'
                                className='form-control'
                                id='exampleInputPassword1'
                                placeholder='Problema que presenta'
                            />
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    )

}