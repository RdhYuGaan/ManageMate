import React from 'react';
import ListIcon from '@mui/icons-material/List';
import CachedIcon from '@mui/icons-material/Cached';
import CircleIcon from '@mui/icons-material/Circle';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Checkbox from '@mui/icons-material/CheckBox';


function TasksList() {
  return (
    <div className="ml-12 mt-11 flex-col  flex gap-4  ">
      <Tabs />
      <div className="flex flex-col gap-4"> 
        <SingleTask />
        <SingleTask />
      </div>
    </div>
  );
}

export default TasksList;

function Tabs() {
  return (
    <div className="flex items-center mt-8 ml-3 gap-6 mb-5 ">
      <div className="flex gap-2 text-orange-400 font-semibold">
        <span>On Going Tasks</span>
        <span className="px-2 bg-orange-400 text-white rounded-md">7</span>
      </div>
      <div className="text-slate-400 flex gap-2 items-center">
        <span>Completed Tasks</span>
        <span className="rounded-md bg-slate-200 px-2">8</span>
      </div>
    </div>
  );
}

function SingleTask() {
  return (
    <div className="flex gap-2 items-center">
      <Checkbox />
      <div className="w-full bg-white rounded-lg border border-slate-100 flex gap-3 items-center justify-between p-5 py-6">
        <div className="flex gap-3 items-center">
          <div>
            {/* wallet icon */}
            <div className="bg-orange-200 rounded-lg p-2 flex items-center justify-center">
              <ListIcon className="text-orange-600" />
            </div>
          </div>
          {/* walllet name */}
          <div className="flex flex-col">
            <span className="font-bold text-black hover:text-orange-600 cursor-pointer">
              Create the UI design of the Task
            </span>
            <div className="flex">
              <span className="text-slate-400 text-[13px] p-[2px]">
              Project
              </span>
            </div>
          </div>  
        </div>
        {/* status */}

        <div className='flex gap-36 font-bold items-center'>
          <div className='flex gap-2 items-center'>
           <CachedIcon className="text-[24px] text-slate-400" />
           <span className='text-[14px] text-slate-400'>In Progress </span>
          </div>

        {/* priority */}
          <div className='flex gap-2 items-center'>
            <CircleIcon className="text-[10px] text-green-600" />
            <span className='text-slate-400 text-[14px]'>
                Low
            </span>
          </div>

         {/* action button */}
          <div className='flex gap-2 items-center'>

          {/* edit button */}
          <div className='rounded-lg p-2 flex items-center transition-all justify-center cursor-pointer bg-orange-200 hover:bg-orange-300'>
            <EditOutlinedIcon 
            sx={{fontSize:"17px"}}
            className="text-orange-600" />

          </div>

          {/* delete button */}
          <div className=' rounded-lg p-2 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300'>
            <DeleteOutlineOutlinedIcon
            sx={{fontSize:'17px'}}
            className="text-slate-600" />
          </div>

          </div>
        </div>

      </div>

      

    </div>
  );
}
