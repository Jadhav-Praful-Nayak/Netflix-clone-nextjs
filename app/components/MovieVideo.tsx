import prisma from "../utils/db"
import MovieButtons from "./MovieButtons";

async function getdata(){
    const data = await prisma.movie.findFirst({
        select: {
          title: true,
          overview: true,
          videoSource: true,
          imageString: true,
          release: true,
          duration: true,
          id: true,
          age: true,
          youtubeString: true,
        },
      });
      return data;
}

export default async function MovieVideo(){
    const data=await getdata();
    return (
        <>
        <div className="h-[55vh] lg-[60vh]  w-full flex justify-start items-center">
            <video src={data?.videoSource} poster={data?.imageString} autoPlay muted loop className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]" >   
            </video>
            <div className="absolute w-[90%] lg-[40%] mx-auto">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">{data?.title}</h1>
                <p className="text-white text-lg mt-5 line-clamp-3">{data?.overview}</p>
                <div className="flex gap-x-3 mt-4">
                <MovieButtons 
                            overview={data?.overview as string}
                            title={data?.title as string}
                            youtubeUrl={data?.youtubeString as string}
                            key={data?.id as number}
                            age={data?.age as number}
                            duration={data?.duration as number}
                            release={data?.release as number} id={data?.id as number}                />  
            </div>
            </div>
        </div>  
        </>
        
        
    )
}