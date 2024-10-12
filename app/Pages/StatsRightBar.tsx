import React from 'react'

import  SplitscreenIcon from '@mui/icons-material/Splitscreen';


function StatsRightBar(){
    return(
        <div className='w-[22%] flex justify-end items-center'>
            <div className='h-[92%] w-[94%] bg-white rounded-l-3xl p-3 flex flex-col'>
                <Header />
                <div className='flex-col flex gap-11 items-center justify-center mt-6'>
                     <CircularChart />
                   
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
}




export default StatsRightBar
