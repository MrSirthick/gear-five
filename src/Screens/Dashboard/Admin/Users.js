 import React from 'react'
import SideNav from '../SideNav'
import Table2 from '../../../Components/Table2'
import { UsersData } from '../../../Data/MoviesData'
 
 function Users() {
   return (
     <SideNav>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold'>Users</h2>
            <Table2 data={UsersData} users={true}/>
        </div>
     </SideNav>
   )
 }
 
 export default Users