import React from 'react'
import {FaCloudDownloadAlt, FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import {GoEye} from 'react-icons/go'
import { Link } from 'react-router-dom';
const Head ="text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows =(movie,i,admin)=>{
    return (
        <tr key={i}>
            <td className={`${Text}`}>
                <div className='w-12 border border-sky h-12 rounded overflow-hidden'>

                <img
                className='h-16 w-16 rounded-full object-cover'
                src={`DataImages/${movie?.titleImage}`}
                alt={movie?.name}/>
                </div>
            </td>
            <td className={`${Text}`}>{movie.name}</td>
            <td className={`${Text}`}>{movie.category}</td>
            <td className={`${Text}`}>{movie.episodes}</td>
            <td className={`${Text} float-right flex-rows gap-2`}>
                {
                   
                    admin ? (
                        <>
                        <button className='border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
          Edit <FaEdit className="text-sky"/>
        </button>
        <button className="bg-submain text-white rounded flex-colo w-7 h-7">
          <MdDelete/>
        </button>
        </>
                    ) : (
                        <>
                        <button className='border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
          Download <FaCloudDownloadAlt className="text-sky"/>
        </button>
        <Link to={`movie/${movie.name}`} className="bg-submain text-white rounded flex-colo w-7 h-7">
          <GoEye/>
        </Link>
        </> 
                    )                }
            
            </td>
        </tr>
    )
}

function Table({data,admin}) {
  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
        <table className='w-full table-auto border border-sky divide-y divide-sky'>
            <thead>
                <tr className='bg-drygray'>
                    <th scope='col' className={`${Head}`}>
                        Image
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Name
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Category
                    </th>
                    <th scope='col' className={`${Head}`}>
                       Epsiodes 
                    </th>
                    <th scope='col' className={`${Head} text-end`}>
                        Action
                    </th>
                    
                    
                </tr>
            </thead>
            <tbody className='divide-y divide-sky'>
                {data.map((movie,i)=>Rows(movie,i,admin))}
            </tbody>
        </table>
    </div>
  )
}

export default Table