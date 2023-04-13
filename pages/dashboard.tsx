import Navbar from "@/components/Navbar"
import MovieList from "@/components/MovieList"
import useMovieList from "@/hooks/useMovieList"

const dashboard = () => {
    const {data: movies = []} = useMovieList();

    return (
        <div className="px-[9.5vw]">
            <Navbar/>
            <div className="mb-[80px]"></div>
            <MovieList title="Latest" data={movies}/>
        </div>
    )
}

export default dashboard