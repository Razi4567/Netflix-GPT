import MovieCard from "./MovieCard";

const MovieList = ({title, movies, size}) => {

    const imgSize = size? size : "w500";

    return movies && (
        <div className='mb-5'>
            <h1 className="text-white text-lg py-1 pl-1">{title}</h1>
            <div className="flex gap-5 overflow-x-auto scrollbar-none">
                {
                    movies?.map((movie) => {
                        return  <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id} size ={imgSize}/>
                    })
                }
            </div>
        </div>
    )
}

export default MovieList