import {AiTwotoneFire} from 'react-icons/ai'
function Progress(){
    return (
        <div className="card-progress glass-bg">
            <div className='grid grid-rows-3'>
                <div>
                    <h3>Streaks</h3>
                </div>
                <div>
                    <AiTwotoneFire style={{fontsize:'100px'}}></AiTwotoneFire>
                </div>
                <div>
                    <h3>You're making great progress!</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Progress;