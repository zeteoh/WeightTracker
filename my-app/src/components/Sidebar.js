import {CgProfile} from 'react-icons/cg'
import {FaWeight} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import { NavLink } from "react-router-dom";

export default function SideBar(){
    return (
        <div className="sidebar flex flex-col items-center">
              <div className="flex-none min-h-1/6 py-10">
                <img className='logo' src={require('../assets/logo.png')} alt=""></img>
               </div>
                <NavLink className="link" to="/" onClick={''}>
                    <CgProfile style={{fontSize:'36px'}}></CgProfile>
                    <span className='pl-10'>Profile</span>
                </NavLink>
                <NavLink className="link" to="/" onClick={''}>
                    <FaWeight style={{fontSize:'36px'}}></FaWeight>
                    <span className="pl-10">Weight Tracker</span>
                </NavLink>
                <NavLink className="link" to="/" onClick={''}>
                    <FiLogOut style={{fontSize:'36px'}}></FiLogOut>
                    <span className="pl-10">Logout</span>
                </NavLink>
        </div>
        // <div className="sidebar">
        //     <div className="lex flex-col p-3 bg-white-800 shadow w-60">
        //         <div className="space-y-3">
        //             <div className="flex items-center"> 
        //                 <h2 className="text-xl font-bold text-black">Dashboard</h2>
        //             </div>
        //             <div className="flex-1">
        //                 <ul className="pt-2 pb-4 space-y-1 text-sm">
        //                     <li className="rounded-sm">
        //                         <div
        //                             className="flex items-center p-2 space-x-3 rounded-md"
        //                         >
        //                             <CgProfile style={{fontSize:'40px'}}></CgProfile>
        //                             <span className="text-black-100">Profile</span>
        //                         </div>
        //                     </li>
        //                     <li className='rounded-sm'>
        //                         <div
        //                             className="flex items-center p-2 space-x-3 rounded-md"
        //                         >
        //                             <FaWeight style={{fontSize:'40px'}}></FaWeight>
        //                             <span className="text-black-100">Weight Tracker</span>
        //                         </div>
        //                     </li>
        //                     <li className='rounded-sm'>
        //                         <div
        //                             className="flex items-center p-2 space-x-3 rounded-md"
        //                         >
        //                             <FiLogOut style={{fontSize:'40px'}}></FiLogOut>
        //                             <span className="text-black-100">Logout</span>
        //                         </div>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )


}