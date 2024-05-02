
import Logo from '../assets/Logo.svg'
import Lan from '../assets/Aus.svg'
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
    return (
        <div className="flex items-center justify-between px-10 bg-black">
            <div className=' text-white'>
                <ul className='flex gap-5 items-center'>
                    <li>Mission</li>
                    <li>Advice</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className=''>
                <img src={Logo} alt="" />
            </div>
            <div className='flex gap-5'>
                <button className='flex items-center  justify-center  gap-3 text-white rounded-3xl border-white border-2 w-32 text-xl'>
                    Login
                    <RiArrowDropDownLine  className="text-3xl"/>
                </button>
                <img src={Lan} alt="" className=''/>
            </div>

        </div>


    );
};

export default Header;
