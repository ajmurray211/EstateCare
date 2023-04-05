import logo from '../assets/EstateCareLogo.png'


const Header = () => {
    return ( 
        <div className="header">
            <img src={logo}/>
            <h2>
                Time Sheet
            </h2>
        </div>
     );
}
 
export default Header;