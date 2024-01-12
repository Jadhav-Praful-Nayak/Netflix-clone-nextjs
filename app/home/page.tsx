import MovieVideo from "../components/MovieVideo";
import Navbar from "../components/Navbar";
import RecentlyAdded from "../components/RecentlyAdded";

export default function HomePage(){
    return (
        <div>
            <MovieVideo/>
        <div className="absolute w-[60%] lg:w-[95%] mx-auto">
            <h1 className="text-white text-3xl font-bold flex justify-between items-center">Recently Added</h1>
            <RecentlyAdded/>
        </div>
            
        </div>
    )
}