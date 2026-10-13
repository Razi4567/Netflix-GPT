import MovieList from './MovieList'
import { MOVIE_GENRES } from '../Utils/constants';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movieCategories = useSelector(store => store.movies);
    const {trendingMovies, nowPlayingMovies,topRatedMovies,upComingMovies,comedyMovies} = movieCategories;

    return (
        <div className="bg-[#000] pl-12">
            <div className='-mt-72 relative z-10'>
                <MovieList title={"Top Rated"} movies={topRatedMovies}/>
                <MovieList title={"Now Playing on Netflix"} movies={nowPlayingMovies}/>
                <MovieList title={"Upcoming Movies"} movies={upComingMovies}/>
                <MovieList title={"Trending Movies"} movies={trendingMovies}/>
                <MovieList title={"Comedy"} movies={comedyMovies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer