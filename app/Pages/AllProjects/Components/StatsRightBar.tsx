import React from 'react'

import  SplitscreenIcon from '@mui/icons-material/Splitscreen';


function StatsRightBar(){
    return(
        <div className='w-[22%] flex justify-end items-center'>
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
                
            </div>
        </li>
    );
}

function Header(){
    return(
        <h2 className='text-[22px] font-bold text-center mt-7'>
            Projects Completed...
        </h2>
    );
}

function ProjectsCompletedLables(){
    return (
        <div className='flex justify-center flex-col gpa-1 items-center'>
            <p className='font-bold text-[17px]'>3 Completed</p>
            <p className='text-slate-400 text-[13px]'>20 Tasks done</p>
        </div>
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


export default StatsRightBar;
