import { DeviceData } from './DiviceData'



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
                <DeviceData />
            </form>
        </>
    )

}