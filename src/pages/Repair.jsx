import { RepairRegister } from '../components/RepairRegister'
import { Repaired } from '../components/Repaired'


export const Repair = function ({ }) {
    return (
        <div className='container mt-5'>
            <div className='row row-gap-2'>
                <div className='col-md-6'>
                    <RepairRegister />
                </div>
                <Repaired title='Historial de reparación' />
                <br />
                <Repaired title='Titulo de ejemplo' />
            </div>
        </div>
    )
}