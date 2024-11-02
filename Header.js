import { LOGO_URL } from "../Utils/constants";
import {Link} from  'react-router-dom';
import useOnlineStatus from "./useOnlineStatus";
const Header = () => {
const online=useOnlineStatus();
    //if there is no dependancy([]) use effect is called  each time the components is rendered 
    //if there is dependancy([]) use effect is called  only once at initial render
    //if there is something in dependancy the use effect is called every time the dependancy change
   

    // useEffect(() => {
    //     // Your code here
    //     console.log("header re-rendered");
    // }, []);

    return (
       
            <div className="flex justify-between bg-pink-100 shadow-lg mb-3">
                <div className="logo-Container">
                    <img 
                    className="w-28"
                     src={LOGO_URL}
                    alt="app-logo" />
                </div>
                <div className="flex items-center">
                    <ul className="flex p-4 m-4" >
                        <li className="px-4">
                            <Link>Online Status:{online===true?"✅️":"🔴️"}</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/">Home</Link></li>
                        <li className="px-4"> <Link to="/Aboutus">About Us</Link></li>
                        <li className="px-4"> <Link to="/Contactus">Contact Us</Link></li>  {/* Link is used beacuse it will not refresh the page as the anchor tag it will just referesh body Component*/}
                        <li className="px-4"><Link to="/">Cart</Link></li>
                        <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                    </ul>
                </div>

            </div>
      
    );
}



export default Header;