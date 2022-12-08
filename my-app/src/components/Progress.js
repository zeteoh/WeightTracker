import {AiTwotoneFire} from 'react-icons/ai'
function Progress(){
    return (
        <div className="glass-bg-progress">
            <div className='grid grid-rows-5'>
                <div className='row-start-1 row-span-1'>
                    <h3 className='text heading-streaks'>Streaks</h3>
                </div>
                <div className='row-start-2 row-span-2 div-center-container'>
                    <span className='svg-streak-container'>
                        <AiTwotoneFire className='svg-streaks'/><text className='text svg-streaks-logo-text' x='0'y='30'>30</text>
                    </span>
                    {/* <AiTwotoneFire className='svg-streaks'>
                        <text className='text svg-streaks-logo-text' x='0'y='30'>30</text>
                    </AiTwotoneFire> */}
                </div>
                <div className='row-start-4 row-span-2 div-center-container'>
                    <text className='text svg-streaks-text'>You're making great progress!</text>
                </div>
            </div>
        </div>
    )
}

export default Progress;