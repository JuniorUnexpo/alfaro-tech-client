import { useState } from 'react'

import { DeviceData } from '../components/DiviceData'
import { Repaired } from '../components/Repaired'



export const Report = function({  }){
    const [text, setText] = useState('')
    

    return (
        <div className='container mt-5'>
            <div className='row row-gap-2'>
                <Repaired title='Mis reparación' />
                <div className='col-md-6'>
                    <DeviceData editable={false} />
                    <div className='mt-5'>
                        <div>
                            <p className='fw-semibold'>
                                Reporta tu fallo aquí:
                            </p>
                        </div>
                        <textarea 
                            style={{height: '14rem', outline: 'none'}} 
                            className='w-100' 
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <div className='row mt-3'>
                            <div className='col-md-6'>
                                <button className="btn btn-primary w-100">Enviar</button>
                            </div>
                            <div className='col-md-6'>
                                <button 
                                    className="btn btn-danger w-100"
                                    onClick={e => setText('')}
                                >
                                    Limpiar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}