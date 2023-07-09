import { useState, useEffect } from 'react'



export const Repaired = function({ title }){
    const [titulos, setTitulos] = useState(['telefono', 'pc', 'laptop'])


    return (
        <div className='col-md-6'>
            <div>
                <h2 className='mb-5'>
                    {title}
                </h2>
            </div>
            <div className='row'>
                <div className='col'>
                    {
                        titulos.map((elem, i) => (
                            <div key={i} className="card d-flex flex-row w-full mt-3">
                                <img src="https://aaradhyabox.in/wp-content/uploads/2020/04/history-of-cardboard-box.jpg" className="card-img-top w-25 p-3" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{elem}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}