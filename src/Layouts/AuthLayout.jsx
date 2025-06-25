import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';


const AuthLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='min-h-[calc(100vh-432px)]'>
                <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <Outlet></Outlet>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;