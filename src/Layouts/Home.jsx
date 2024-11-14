import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import LeftAside from '../Components/layout Components/LeftAside';
import RightAside from '../Components/layout Components/RightAside';
import Navbar from '../Components/Navbar';


const Home = () => {
    return (

        <div className='font-poppins'>

            <header className="sticky top-0 bg-white z-20 shadow-md">
                <Header></Header>

                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>

            <nav className='w-11/12 mx-auto mt-5'>
                <Navbar></Navbar>
            </nav>

            <main className='w-11/12 mx-auto mt-8 grid md:grid-cols-12'>

                <aside className='col-span-3'><LeftAside></LeftAside></aside>

                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3'><RightAside></RightAside></aside>


            </main>
        </div>
    );
};

export default Home;