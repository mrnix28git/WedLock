
import Logo from '../assets/Logo.svg'
import Lan from '../assets/Aus.svg'
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
    return (
        <div className="flex items-center justify-between md:px-10 px-5 bg-black">
            <div className=' text-white'>
                <ul className='hidden md:flex gap-5 items-center'>
                    <li>Mission</li>
                    <li>Advice</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className='w-40 md:w-auto'>
                <img src={Logo} alt="" />
            </div>
            <div className='flex gap-5'>
                <button className='flex items-center  justify-center  md:gap-3 text-white rounded-3xl border-white border-2 md:w-32 w-20 md:text-xl p-1'>
                    Login
                    <RiArrowDropDownLine className="text-3xl" />
                </button>
                <img src={Lan} alt="" className='w-10' />
            </div>

        </div>


    );
};

export default Header;
