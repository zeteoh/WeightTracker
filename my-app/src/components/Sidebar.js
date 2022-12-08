import {CgProfile} from 'react-icons/cg'
import {FaWeight} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

export default function SideBar(){
    return (

        // <div className="flex">
        //     <div className="lex flex-col h-screen p-3 bg-white-800 shadow w-60">
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
        <div className='flex flex-col glass-bg-dashboard'>
            <div className='basis-1/4 dashboard-logo-container'>
                <img src={require('../assets/Vector.png')} width='80px' height='80px' alt=""></img>
            </div>
            <div>
                <CgProfile className='svg'></CgProfile>
                <span className="dashboard-text">Profile</span>
            </div>
            <div>
                <FaWeight className='svg'></FaWeight>
                <span className="dashboard-text">Weight Tracker</span>
            </div>
            <div>
                <FiLogOut className='svg'></FiLogOut>
                <span className="dashboard-text">Log out</span>
            </div>
        </div>
    )


}