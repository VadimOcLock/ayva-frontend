import React, {useState} from 'react';
import classes from './TimePickerInput.module.css'
import {TimeField} from "@mui/x-date-pickers";
const TimePickerInput = ({...props}) => {
    const [time, setTime] = useState('')
    const [formattedTime, setFormattedTime] = useState('')
    const [timer, setTimer] = useState(null)
    // const formatTime = (val) => {
    //
    //
    //
    //     setTime(val.replaceAll(':', '').replaceAll('.', '').replaceAll('0', ''))
    //     let format = '0.00:00'
    //     for (let i = 0; i < time.length; i++){
    //         format = format.replace('0', time[i])
    //     }
    //
    //     console.log(formattedTime)
    //     if (timer) {
    //         clearTimeout(timer)
    //     }
    //     setTimer(setTimeout(() => {
    //         console.log(123)
    //         setFormattedTime(format.split('').reverse().join(''))
    //     }, 400))
    // }

    return (
        <div>
            <input
                className='time-input'
                type={'time'}
                min='00:00'
                step={1}
                onInput={e => setTime(e.target.value)}
                value={time}
                {...props}/>
        </div>


    );
};

export default TimePickerInput;