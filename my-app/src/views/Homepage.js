import { motion } from 'framer-motion';
import SideBar from '../components/Sidebar';
import Progress from '../components/Progress';
import '../assets/styles.css'

export default function Homepage(){
    return (
        <div className="min-h-screen p-12 flex">
            <img className='bg-images ellipse-1' src={require('../assets/Ellipse 11.png')} alt=""></img>
            <img className='bg-images ellipse-2' src={require('../assets/Ellipse 13.png')} alt=""></img>
            <img className='bg-images bg-rectangles' src={require('../assets/Rectangle 29.png')} alt=""></img>
            <div className='glass-bg-home flex p-2'> 
                <div className='glass-bg-home flex'> 
                    <div  className='flex-none w-64'>
                        <SideBar></SideBar>
                    </div>
                    <div className="flex-1">
                        test
                    </div>
                    <div className="flex-1">
                        test
                    </div>
                </div>
                {/* <div className='col-start-1 col-span-1'>
                    <SideBar></SideBar>
                </div>
                <div className='col-start-2 col-span-2'>
                    <h1>hi</h1>
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
                            <Progress>

                            </Progress>
                        </div>
                    </div>
                </div>
                <div className='col-start-3 col-span-2'>
                    <h1>hi</h1>
                </div> */}
            </div>
        </div>
    );

}