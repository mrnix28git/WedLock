import React, { useState } from 'react'
import { IoMdArrowForward } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoArrowForward, IoArrowBack, IoLogoTwitter } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaGooglePlay, FaApple } from "react-icons/fa";
import Yt from '../assets/YT.svg'
import Yt2 from '../assets/Yt2.svg'
import Story from '../assets/story.svg'
import Feature from '../assets/Feature.svg'
import Main from '../assets/main.svg'
import Thunder from '../assets/thunder.svg'
import Ai from '../assets/Ai.svg'
import Logo from '../assets/Logo.svg'
import Gplay from '../assets/google-play.png'
import AppS from '../assets/app-store.png'


const Home = () => {

    const [answer, setAnswer] = useState(null);
    return (
        <div>
            {/* main  */}
            <div className='bg-black text-center flex flex-col items-center gap-20  py-16'>
                {/* main  */}
                <div className='text-white'>
                    <h1 className=' text-7xl font-bold'>Love at first swipe</h1>
                    <p className='text-2xl'>With over two decades of reliable matchmaking experience,<br />
                        supported by a committed Trust and Safety.</p>
                </div>

                <div className="bg-white bg-opacity-45  p-5 rounded-xl max-w-sm mx-auto shadow-lg flex flex-col items-center">
                    <p className="mb-4 text-lg text-white">Have you tried online dating before?</p>
                    <div className="flex items-center space-x-4">
                        <label className='bg-white rounded-2xl w-20 '>
                            <input
                                type="radio"
                                name="dating"
                                value="yes"
                                onChange={() => setAnswer('yes')}

                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="dating"
                                value="no"
                                onChange={() => setAnswer('no')}
                            />
                            No
                        </label>
                    </div>

                </div>

                <div className=''>
                    <button className='flex items-center bg-[#009BDA]  rounded-2xl text-white px-5 py-2 gap-5 text-xl font-extrabold'>
                        Start free today
                        <IoMdArrowForward className='text-2xl' />
                    </button>
                </div>

            </div>
            {/* main end */}
            {/* archive */}

            <div className='bg-[#009BDA] text-white grid grid-cols-3 '>
                <div className='flex flex-col items-center gap-4 text-center hover:bg-[#007EAF] py-6'>
                    <CiHeart className='text-4xl' />
                    <h1 className='text-4xl font-bold'>1000+</h1>
                    <p className='text-2xl'>5 Star reviews from our loving <br /> customers</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-6 text-center hover:bg-[#007EAF] py-6'>
                    <CiHeart className='text-4xl' />
                    <h1 className='text-4xl font-bold'>The #1 Trusted Dating App
                    </h1>
                    <p className='text-2xl'>Privacy with your account</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-6 text-center hover:bg-[#007EAF] py-6'>
                    <CiHeart className='text-4xl' />
                    <h1 className='text-4xl font-bold'>250+</h1>
                    <p className='text-2xl'>Cities covers by us for <br />
                        services</p>
                </div>
            </div>

            {/* archive end */}

            {/* trust  */}

            <div className='space-y-16 py-32 pl-20'>
                <h1 className='text-[#231F20B2] text-2xl'>Trust</h1>
                <div className='space-y-10'>
                    <h1 className='text-[#007EAF] text-6xl font-bold'>The premier dating application with unparalleled trust.
                    </h1>
                    <p className='text-[#231F20B2] text-2xl'>With over two decades of reliable matchmaking experience,<br /> supported by a committed Trust and Safety team at your service.
                    </p>
                </div>
                <button className='text-white bg-[#009BDA] rounded-full w-64 h-24 text-3xl font-semibold'>Join Now</button>
            </div>

            {/* trust end */}

            {/* watch  */}

            <div className='bg-[#007EAF] text-white px-20 py-20 space-y-14'>
                <h1 className='font-Glory text-4xl'>Watch us</h1>
                <h1 className='text-7xl font-bold'>Introducing: A new eharmony experience
                </h1>
                <p className='text-xl'>Your search for a great relationship has never been easier with <br /> groundbreaking overhaul of the eharmony you know and trust.
                </p>
                <img src={Yt} alt="" />
            </div>

            {/* watch end */}

            {/* stories */}

            <div className='space-y-16 px-20 py-20'>
                <h1 className='text-[#231F20E5] text-2xl'>Success stories</h1>
                <div className='space-y-10'>
                    <div className='flex items-center gap-96'>
                        <h1 className='text-[#007EAF] text-6xl font-bold'>Lovely Happy Stories</h1>
                        <div className='flex gap-4'>
                            <IoArrowBack className='text-[#231F20E5] w-16 h-16' />
                            <IoArrowForward className=' text-white rounded-full bg-[#009BDA] w-16 h-16' />

                        </div>
                    </div>
                    <p className='text-[#231F20E5] text-2xl'>Dive into stories of unexpected friendships, love that blossoms in the most extraordinary places, and dreams that come true against all odds.</p>
                </div>
                <div className='flex gap-5'>
                    {/* <div className='relative'>
                        <img src={Story} alt="" className='rounded-3xl w-72' />
                        {/* <div className=' absolute bottom-0 '>
                            <h1>JACK & Celine</h1>
                            <p className='text-xs '>We matched. spoke for sometime and then met in real. We were sure we want to spend our life together after the initial few conversations.</p>
                            <div className='flex items-center gap-3 '>
                                <h1>Read More</h1>
                                <MdOutlineArrowRightAlt  className='text-2xl'/>
                            </div>
                        </div> 
                    </div> */}
                    <img src={Story} alt="" className='rounded-3xl w-72' />
                    <img src={Story} alt="" className='rounded-3xl w-72' />
                    <img src={Story} alt="" className='rounded-3xl w-72' />
                    <img src={Story} alt="" className='rounded-3xl w-72' />
                </div>
            </div>


            {/* stories end */}

            {/* feature */}

            <div className='bg-[#007EAF] flex text-white p-20 '>
                <div className='space-y-12'>
                    <h1 className='text-2xl'>Features</h1>
                    <h1 className='text-5xl font-bold'>Connect with matches the way you like
                    </h1>
                    <p className='text-2xl'>Cras at pellentesque eros. Nullam vitae sapien et felis eleifend luctus. Nam ac dui</p>
                    <img src={Feature} alt="" />
                </div>

                <div>
                    <img src={Main} alt="" />
                </div>
            </div>


            {/* feature end */}
            {/* Ai feature  */}

            <div className='bg-[#007EAF] space-y-40 px-20 pt-20' >
                <div className='relative text-white space-y-10'>
                    <h1 className='text-2xl'>AI Features</h1>
                    <p className='text-5xl font-bold'>AI-driven match <br /> recommendations to suit your <br /> preferences
                    </p>
                    <img src={Thunder} alt="" className='absolute top-0 right-0' />
                </div>
                <div className=''>
                    <div className='bg-[#D3D3D380] border-[#FFFFFF] rounded-t-3xl w-[50rem] h-[34.5rem] relative left-52'>
                        <div>
                            <img src={Ai} alt="" className='relative left-40 -top-10' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ai feature end
             */}

            {/* About */}

            <div className='space-y-20 p-20'>
                <h1 className='text-[#231F20E5] text-3xl font-Glory'>About</h1>
                <h1 className='text-[#007EAF] text-5xl font-bold'>About Wedlock</h1>
                <p className='text-[#231F20E5] text-2xl'>Wedlock, a trailblazer in online matchmaking, is a trusted resource for millions of Indians seeking lifelong partners. Recognized as the most reliable online matrimony service by the Brand Trust Report, Wedlock also holds a record in the Limca Book of Records for the most documented marriages facilitated online. Our mission is to strengthen India by fostering happy and fulfilling unions.
                </p>

            </div>

            {/* About end */}


            {/* watch  */}

            <div className='bg-[#007EAF] text-white px-20 py-20 space-y-14'>
                <h1 className='font-Glory text-4xl'>Watch us</h1>
                <h1 className='text-7xl font-bold'>Introducing: A new eharmony experience
                </h1>
                <p className='text-xl'>Your search for a great relationship has never been easier with <br /> groundbreaking overhaul of the eharmony you know and trust.
                </p>
                <img src={Yt2} alt="" />
            </div>

            {/* watch end */}

            {/* Footer  */}

            <div className='bg-[#2A2A2A] px-14 py-5 text-white space-y-10 text-lg'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className='flex gap-60 '>
                    <div className='space-y-2'>
                        <h1 className='text-center'>Follow us on</h1>
                        <div className='flex gap-5 text-2xl'>
                            <FaFacebookF />
                            <IoLogoTwitter />
                            <FaInstagram />
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>Index</li>
                            <li>Mission</li>
                            <li>Career</li>
                            <li>Labs</li>
                            <li>Press</li>
                            <li>Success Stories</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Resources</li>
                            <li>Safe datinf tips</li>
                            <li>FAQs</li>
                            <li>Trust & safety</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Legal</li>
                            <li>Security</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookie privacy</li>
                            <li>Cookie settings</li>
                        </ul>

                    </div>
                </div>
                <div className='rounded-full bg-[#FFFFFF80] h-1 '></div>
                <div className='space-y-10'>
                    <h1 className='text-2xl'>Get the app</h1>
                    <div className='space-x-5'>
                        <button className='rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D] text-black text-lg p-2'>

                            <div className='flex items-center gap-7  '>
                                <FaApple className='text-5xl' />
                                <div className='text-start'>
                                    <p >Download from</p>
                                    <p className='text-lg font-medium'>Apple Store</p>
                                </div>
                            </div>
                        </button>
                        <button className='rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D]  text-black  text-lg p-2'>
                            <div className='flex items-center gap-7 '>
                                <FaGooglePlay className='text-5xl' />
                                <div className='text-start'>
                                    <p >Download from</p>
                                    <p className='text-lg font-medium'>Google Store</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='rounded-full bg-[#FFFFFF80] h-1 '></div>
                <div className='flex items-end justify-between'>
                    <div>
                        <h1 className='font-semibold'> <i>Endless Possibilities</i>
                        </h1>
                        <p className='text-xs'>This website is strictly for matrimonial purpose only and not a dating website</p>
                    </div>
                    <h1 className=''> © 2024 Wedlock Australia. All rights Reserved</h1>
                </div>

            </div>

            {/* Footer end */}

        </div>
    )
}

export default Home