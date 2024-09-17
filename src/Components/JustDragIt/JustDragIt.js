import React from 'react';
import './JustDragIt.css'
import DragFeature from '../DragFeature/DragFeature';

const JustDragIt = () => {
    return (
        <div className='JustDragIt'>
            <h2 className='JustDragIt-title' id='JustDragIt-1'>Is mom sleeping now?</h2>
            <h2 className='JustDragIt-title' id='JustDragIt-2'>If it’s 3pm here, what time is it for Mero?</h2>
            <h2 className='JustDragIt-title' id='JustDragIt-3'>When is it a good time to call Fran?</h2>
            <h2 className='JustDragIt-title' id='JustDragIt-4'>Rahul landed in the US, what time is it there?</h2>
            <div className='JustDragIt-content'>
                <h2 className='JustDragItFinal'>Just drag</h2>
                <DragFeature/>
                <h2 className='JustDragItFinal'>it.</h2>
                </div>
                
        </div>
    );
};

export default JustDragIt;