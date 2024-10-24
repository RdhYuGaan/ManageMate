import React from 'react'

import  SplitscreenIcon from '@mui/icons-material/Splitscreen';


function StatsRightBar(){
    return(
        <div className='w-[22%] flex justify-end items-center max-lg:hidden'>
            <div className='h-[92%] w-[94%] bg-white rounded-l-3xl p-3 flex flex-col'>
                <Header />
                <div className='flex-col flex gap-11 items-center justify-center mt-6'>
                     <CircularChart />
                     <ProjectsCompletedLables />
                </div>
                <ProjectsList />
            </div>
        </div>
    );

}




function ProjectsList(){
    return (
        
        <ul className="flex flex-col gap-3 mt-16 mx-4 overflow-auto">
        <SingleProject />

        <hr className='w-[80%] mx-auto text-slate-100 opacity-50'></hr>
        
        <SingleProject />
        <hr className='w-[80%] mx-auto text-slate-100 opacity-50'></hr>

        <SingleProject />
        </ul>
    );    
}


function SingleProject(){
    return (
        <li className='p-3 flex gap-2 items-center'>
            <div className='w-8 h-8 bg-orange-600 rounded-md
            justify-center items-center'>
                <SplitscreenIcon sx={{fontSize:"19px"}} />
            </div>

            <ul>
                <li className='text-[14px] text-slate-800 font-semibold'>Project 1</li>
                <li className='text-[12px] text-slate-500'>3 Tasks</li>
            </ul>
        </li>
    );
}

function Header(){
    return(
        <h2 className='text-[22px] font-bold text-slate-800 text-center mt-7'>
            Projects Completed...
        </h2>
    );
}

function ProjectsCompletedLables(){
    return (
        <div className='flex justify-center flex-col gpa-1 items-center'>
            <p className='font-bold  text-slate-700 text-[17px]'>3 Completed</p>
            <p className='text-slate-600 text-[13px]'>20 Tasks done</p>
        </div>
    );
}

function CircularChart(){
    return (
        <div className='flex justify-center items-center'>
            <div className='w-40 h-40 bg-slate-300 mt-5 rounded-full 
            flex items-center justify-center'>
                <div className='w-[75%] h-[75%] flex justify-center items-center 
                rounded-full bg-white'>
                     <span className='text-xl font-semibold rounded-lg text-orange-600'>90%</span>
                </div>
               
            </div>
        </div>
    );
}


export default StatsRightBar;
