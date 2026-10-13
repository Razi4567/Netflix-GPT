import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import NetflixGPT from './NetflixGpt'
import LandingPage from './LandingPage'
import MovieDetails from './MovieDetails'

function Body() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <Error />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <Error />
    },
    {
      path: "/moviedetails/:movieId",
      element: <MovieDetails />,
      errorElement: <Error />
    },
    {
      path: "/netflixgpt",
      element: <NetflixGPT />,
      errorElement: <Error />
    },
  ]
)

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
