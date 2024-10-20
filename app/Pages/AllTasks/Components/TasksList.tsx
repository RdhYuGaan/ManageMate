import { CheckBox } from '@mui/icons-material';
import React from 'react'
import ListIcon from '@mui/icons-material/List'
function TasksList () {
  return (
    <div className='ml-12 mt-11 flex-col flex gap-4'>
        <Tabs />
        <div className='flec- flex-col gap-4'>
            {/* <SingleTask />
            <SingleTask /> */}

        </div>
    </div>
  );
}

export default TasksList;


function Tabs(){
  return (
    <div className='flex items-center mt-8 ml-3 gap-6 mb-5 border'>
      <div className='flex gap-2 bg-orange-400  font-semibold'>
        <span>On Going Tasks</span>
        <span className='px-2 bg-orange-400 text-white rounded-md'>7</span>

      </div>
      <div className='text-slate-400 flex gap-2 items-center'>
        <span>Completed Tasks</span>
        <span className='rounded-md bg-slate-200 px-2'>8</span>
      </div>
    </div>

  )
}

function SingleTask(){
  return (
    <div className='flex gap-2 items-center'>
      <CheckBox />
      <div className='w-full bg-white rounded-lg border border-slate-100 flex
       gap-3 items center justify-between p-5 py-6 '>
        <div className='flex gap-3 items-center'>
          <div>
            <div className='bg-orange-200 rounded-lg p-2 flex items-center justify-between'>
              <ListIcon className="text-orange-600" /> 
            </div>
          </div>
          <span className='font-bold hover:text-orange-600 cursor-pointer'>
          create the UI design of the Task
          </span>
          <div className=' flex'>
            <span className='text-slate-400 text-[13px] p-[2px]'>
              Project
            </span>
            
          </div>
        </div>
  
      </div>
    </div>
  )
}

