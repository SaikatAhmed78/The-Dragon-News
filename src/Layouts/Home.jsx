import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';


const Home = () => {
    return (
        <div>
            
           <Header></Header>

           <section className='w-11/12 mx-auto'>
            <LatestNews></LatestNews>
           </section>

        </div>
    );
};

export default Home;