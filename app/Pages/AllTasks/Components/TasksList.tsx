import React from 'react'

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


