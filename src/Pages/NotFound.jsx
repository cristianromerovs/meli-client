import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='vh-100 wh-100 d-flex flex-column justify-content-center align-items-center'>
        <h1 className='mb-3'>404 Page Not Found</h1>
        <Link to={'/'} className='btn btn-primary'>Volver al inicio</Link>
    </div>
  )
}
