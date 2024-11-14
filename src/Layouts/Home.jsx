import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';


const Home = () => {
    return (

        <div className='font-poppins'>
            
           <header>
           <Header></Header>

           <section className='w-11/12 mx-auto'>
            <LatestNews></LatestNews>
           </section>
           </header>

           <nav className='w-11/12 mx-auto mt-5'>
           <Navbar></Navbar>
           </nav>

            <main className='w-11/12 mx-auto mt-8 grid md:grid-cols-12'>

                <aside className='col-span-3'>Left Navbar</aside>
                <section className='col-span-6'>Main Content</section>
                <aside className='col-span-3'>Right navbar</aside>
            </main>
        </div>
    );
};

export default Home;