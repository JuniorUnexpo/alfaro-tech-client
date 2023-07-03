import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'


const navigation = [
    {
        title: 'Inventario',
        href: '/inventario'
    },
    {
        title: 'Reparaciones',
        href: '/reparaciones'
    },
    {
        title: 'Reportar equipo',
        href: '/reportar-equipo'
    }
]

export const Navbar = function({ }){
    const location = useLocation()
    
    return (
        <nav className='navbar navbar-expand-lg bg-dark' data-bs-theme='dark'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>Navbar</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor02' aria-controls='navbarColor02' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarColor02'>
                    <ul className='navbar-nav me-auto'>
                        {navigation.map((item, i) => (
                            <li className='nav-item' key={i}>
                                <Link className={clsx('nav-link', location.pathname.includes(item.href) && 'active')} to={item.href}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <form className='d-flex'>
                    <input type='text' className='form-control me-sm-2' placeholder='Buscar' />
                        <button className='btn btn-secondary my-2 my-sm-0' type='submit'>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}