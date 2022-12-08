import { motion } from 'framer-motion';
import SideBar from '../components/Sidebar';
import MiddleCard from './MiddleCard';
import Progress from '../components/Progress';
import '../assets/styles.css'

export default function Homepage(){
    return (
        <motion.div className="min-h-screen text-black" style={{ alignItems: 'center' }} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
            <img className='fixed top-0' src={require('../assets/Ellipse 11.png')} alt=""></img>
            <img className='fixed bottom-0' src={require('../assets/Ellipse 13.png')} alt=""></img>
            <img className='fixed left-0' src={require('../assets/Rectangle 29.png')} alt=""></img>
            <div className='grid grid-flow-row-dense grid-cols-5 glass-bg-home'> 
                <div className='col-start-1 col-span-1'>
                    <SideBar></SideBar>
                </div>
                <div className='col-start-2 col-span-2'>
                    <MiddleCard></MiddleCard>
                </div>
                <div className='col-start-3 col-span-2'>
                    <h1>hi</h1>
                </div>
            </div>
        </motion.div>
    );

}