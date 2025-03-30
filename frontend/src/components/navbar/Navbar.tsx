
import './Navbar.css'
import logo from '../../assets/images/logo.jpg'

function Navbar({ items }: { items: string[] }) {
    return (
        <nav>
            <div className="div-logo">
                <img id='logo' src={logo} alt="Logo da Join" />
            </div>
            <div className='items-navbar'>
                <ul>
                    {items.map((item) => {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}


export default Navbar