import Loader from "../Loader/Loader";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
    return (
        <div>
            <h1 className="text-5xl">
            ClimateWatch
            <Loader></Loader>
            {/* <Newsletter></Newsletter> */}
            </h1>
        </div>
    );
};

export default Home;