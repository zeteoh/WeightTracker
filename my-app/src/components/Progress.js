import {AiTwotoneFire} from 'react-icons/ai'
function Progress(){
    return (
        <div className="glass-bg-progress">
            <div className='progress-inner-card grid grid-rows-5'>
                <div className='row-start-1 row-span-1'>
                    <h3>Streaks</h3>
                </div>
                <div className='row-start-2 row-span-2'>
                    <AiTwotoneFire style={{height:'40%', width: '40%'}}></AiTwotoneFire>
                </div>
                <div className='row-start-4 row-span-2'>
                    <h3>You're making great progress!</h3>
                </div>
            </div>
        </div>
    )
}

export default Progress;