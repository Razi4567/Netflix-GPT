import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movieCategories = useSelector(store => store.movies);
    const {trendingMovies, nowPlayingMovies,topRatedMovies,upComingMovies,comedyMovies} = movieCategories;

    return (
      <div className="bg-[#000] pl-4 md:pl-12">
        <div className="-mt-8 md:-mt-72 relative z-5 h-full pb-40">
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
          <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
          <MovieList title={"Upcoming Movies"} movies={upComingMovies} />
          <MovieList title={"Trending Movies"} movies={trendingMovies} />
          <MovieList title={"Comedy"} movies={comedyMovies} />
        </div>
      </div>
    );
}

export default SecondaryContainer