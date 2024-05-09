import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className='flex'>
            <div className='h-screen bg-purple-500 flex-[1]'>
                <Sidebar/>
            </div>
            <div className='flex-[5]'>
                <Outlet/>
            </div>
        </div>
    );
};

export default AdminLayout;