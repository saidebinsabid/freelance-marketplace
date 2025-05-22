import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {

    return (
        <div >
            <header >
                <NavBar ></NavBar>
            </header>
            <main className='min-h-[calc(100vh-500px)]'>
                <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <Outlet></Outlet>
                </div>
            </main>
            <footer >
                <Footer ></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;