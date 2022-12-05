import { motion } from 'framer-motion';
import SideBar from '../components/Sidebar';
import Progress from '../components/Progress';
import '../assets/styles.css'

export default function Homepage(){
    return (
        <motion.div className="min-h-screen text-black" style={{ alignItems: 'center' }} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
            <img className='fixed top-0' src={require('../assets/Ellipse 11.png')} alt=""></img>
            <img className='fixed bottom-0' src={require('../assets/Ellipse 13.png')} alt=""></img>
            <img className='fixed left-0' src={require('../assets/Rectangle 29.png')} alt=""></img>
            <div className='grid grid-cols-3 card-home glass-bg-home'> 
                <div>
                    <SideBar></SideBar>
                </div>
                <div className='grid grid-rows-3 card-mid'>
                    <div>
                        Welcome Home,
                        Trash
                    </div>
                    <div>
                        <Progress>

                        </Progress>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <h1>hi</h1>
                </div>
            </div>
        </motion.div>
    );

}