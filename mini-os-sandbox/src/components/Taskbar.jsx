import { useState, useEffect } from 'react';
import './Taskbar.css';

export default function Taskbar(){

    return(
        <div className='taskbar-container'>
            <div className='taskbar-left'>
                <button className='taskbar-button'>

                </button>
            </div>

            <div className='taskbar-center'>

            </div>

            <div className='taskbar-tray'>
                <span>12:00PM</span>
            </div>
        </div>
    )
}