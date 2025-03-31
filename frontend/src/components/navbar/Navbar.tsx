
import './Navbar.css'
import logo from '../../assets/images/logo.jpg'
import persona from '../../assets/images/join-persona.png'

function Navbar() {
    return (
        <nav>
            <div className="div-logo">
                <img id='logo' src={logo} alt="Logo da Join" />
            </div>
            <div className='div-persona'>
                <h2>Gerenciador de produtos para Join</h2>
                <img id='persona' src={persona} alt="Logo da Join" />
            </div>
        </nav>
    )
}


export default Navbar