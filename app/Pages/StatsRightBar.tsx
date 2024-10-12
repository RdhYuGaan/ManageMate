import React from 'react'

import  SplitscreenIcon from '@mui/icons-material/Splitscreen';


function StatsRightBar(){
    return(
        <div className='w-[22%] flex justify-end items-center'>
            <div className='h-[92%] w-[94%] bg-white rounded-l-3xl p-3 flex flex-col'>
                <Header />
                <div className='flex-col flex gap-11 items-center justify-center mt-6'>
                     <CircularChart />
                     <ProjectCompletedLables />
                </div>

            </div>
        </div>
    );


    function Header(){
        return(
            <h2 className='text-[22px] font-bold text-center mt-7'>
                Projects Completed...
            </h2>
        );
    }


    function CircularChart(){
        return (
            <div className='flex justify-center items-center'>
                <div className='w-40 h-40 bg-slate-100 mt-5 rounded-full 
                flex items-center justify-center'>
                    <div className='w-[68%] flex justify-center items-center h-[86%]
                    rounded-full bg-white'>
                         <span className='text-xl font-semibold bg-orange-600'>90%</span>
                    </div>
                   
                </div>
            </div>
        );
    }



    
}




export default StatsRightBar
