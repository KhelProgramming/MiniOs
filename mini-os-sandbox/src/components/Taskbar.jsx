import { useState, useEffect } from 'react';
import './Taskbar.css';

export default function Taskbar(){

    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}))

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}))
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div className='taskbar-container'>
            <div className='taskbar-left'>
                <button className='start-btn'>
                    <svg viewBox="0 0 88 88" width='24' height='24'>
                        <path fill='currentColor' d='M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.528l.027 34.453-35.697-4.892v-29.764zm4.316-34.536l48.014-6.894v37.291h-48.014zm48.014 38.303l-.014 37.291-48 6.891-.014-34.331z' />
                    </svg>

                </button>
            </div>

            <div className='taskbar-center'>

            </div>

            <div className='taskbar-tray'>
                <span>{time}</span>
            </div>
        </div>
    )
}