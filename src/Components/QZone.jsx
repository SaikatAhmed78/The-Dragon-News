import React from 'react';
import swimming from '../assets/swimming.png'
import classes from '../assets/class.png'
import play from '../assets/playground.png'
import BG from '../assets/bg.png'

const QZone = () => {
    return (
        <div className="mt-16">
            <h2 className="font-semibold mb-3">Q-Zone</h2>
            <div className="flex flex-col space-y-4">
                <div className="qzone-item  p-4 rounded shadow-md">
                    <img src={swimming} className="w-full rounded mb-2"/>
                    <p className="font-medium text-center">Swimming</p>
                </div>
                <div className="qzone-item  p-4 rounded shadow-md">
                    <img src={classes} className="w-full rounded mb-2"/>
                    <p className="font-medium text-center">Class</p>
                </div>
                <div className="qzone-item  p-4 rounded shadow-md">
                    <img src={play} className="w-full rounded mb-2"/>
                    <p className="font-medium text-center">Playground</p>
                </div>
                <div className="qzone-item  p-4 rounded shadow-md">
                    <img src={BG} className="w-full rounded mb-2"/>
        
                </div>
            </div>
        </div>
    );
};

export default QZone;
