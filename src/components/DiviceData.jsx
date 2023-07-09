import { clsx } from 'clsx'


export const DeviceData = function({ editable=true }){
    return (
        <fieldset>
            <div className={clsx(editable && 'mt-5')}>
                {
                    !editable ? (
                        <h2 className='mb-5'>
                            Datos del equipo
                        </h2>
                    ) : (
                        <p className='fw-semibold'>
                            Datos del equipo
                        </p>
                    )
                }
            </div>
            <div className='row row-gap-1'>
                <div className='form-group col'>
                    <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='Nombre'
                        readOnly={!editable}
                        />
                </div>
                <div className='form-group col'>
                    <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='Marca'
                        readOnly={!editable}
                        />
                </div>
            </div>
            <div className='mt-3 row row-gap-1'>
                <div className='form-group col'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Modelo'
                        readOnly={!editable}
                    />
                </div>
                <div className='form-group col'>
                    <input type='checkbox' className='btn-check' id='btncheck1' readOnly={!editable} />
                    <label className="btn btn-outline-primary d-block" for="btncheck1">¿Es cliente frecuente?</label>
                </div>
            </div>
            <div className='mt-3 row row-gap-1'>
                <div className='form-group col'>
                    <input
                        type='text'
                        className='form-control'
                        id='exampleInputPassword1'
                        placeholder='Problema que presenta'
                        readOnly={!editable}
                    />
                </div>
            </div>
        </fieldset>
    )
}