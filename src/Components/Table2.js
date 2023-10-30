import React from 'react'
import {MdDelete} from 'react-icons/md'
const Head ="text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows =(data,i)=>{
    return (
        <tr key={i}>
            <td className={`${Text}`}>
                <div className='w-12 border border-sky h-12 rounded overflow-hidden'>

                <img
                className='h-16 w-16 rounded-full object-cover'
                src={`DataImages/${data.img ? data?.image:"jk1.jpg"}`}
                alt={data?.fullname}/>
                </div>
            </td>
            <td className={`${Text}`}>{data?._id ? data._id:"234"}</td>
            <td className={`${Text}`}>{data.createAt ? data.createAt : "12,Jan 2023"}</td>
            <td className={`${Text}`}>{data.fullname}</td>
            <td className={`${Text}`}>{data.email}</td>
            <td className={`${Text} float-right flex-rows gap-2`}>
            <button className="bg-submain text-white rounded flex-colo w-7 h-7">
          <MdDelete/>
        </button>
             </td>
        </tr>
    )
}

function Table2({data,user}) {
  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
        <table className='w-full table-auto border border-sky divide-y divide-sky'>
            <thead>
                <tr className='bg-drygray'>
                    <th scope='col' className={`${Head}`}>
                        Image
                    </th>
                    <th scope='col' className={`${Head}`}>
                        ID
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Date
                    </th>
                    <th scope='col' className={`${Head}`}>
                        FullName
                    </th>
                    <th scope='col' className={`${Head}`}>
                       Email
                    </th>
                    <th scope='col' className={`${Head} text-end`}>
                        Action
                    </th>
                    
                </tr>
            </thead>
            <tbody className='divide-y divide-sky'>
                {data.map((movie,i)=>Rows(movie,i,user))}
            </tbody>
        </table>
    </div>
  )
}

export default Table2