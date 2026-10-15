# NetFlix GPT
- Create React App using vite
- Configured Tailwind css
- App routing
- Header 
- Login form
- Sign Up form
- Form validation
- useRef hook
- Supabase setup for email login/signup
- Created redux store with user slice
- Implemented onAuthSession from supabase to control signIn/out changes
- Implemented signOut
- Bugfix - Navigate the user from login page to browse page when only signedIn and vise versa
- Unsubscribed to the onAuthSession callback
- Registered on TBDM and got access token
- Fetched trendingMovies, nowplaying and other movie categories using tmdb api
- Created movie slice im reduc store
- Stored the fetched movies lists in the movie slice
- Fetched the trailer key of the first movie from trending movie list
- Stored the trailer key to the movie slice of reduc store
- Created browse page with two segements one for video background and title and the second for movie categories lists
- Bugfix - Reseting the movie slice after logout 
- Created movielist component for movie categories
- Created moviecard component for movie image rendering
- Created movie details page
- Fetched tmdb movie details api for getting more info about the movie
- Made movie card clickable to navigate to movie details page 
- Fetched tmdb related movies api
- Stored the movies to the movie slice
- Displayed the corresponding similer movies in the details page
- Made multilingual rendering (English & hindi)
- Created config slice in store
- Stored the selected language key to store
- Implemented GenAI movie suggestion
- Fetched AI suggested movies from tmdb
- Stored the suggested movies to store
- Reused the movielist and moviecard for rendering the movies
- Made the page responsive to small and large screens

# Features
- Login/signup page
    - Header
    -  
    - Signin/signup form
        - Redirect to browse page after signin

- Browse page (After authentication)
    - Header
    - Main movie
        - Movie trailer running in the body background
        - Movie name, play button and more info button
        - On hovering the movie name, the description about the movie is displayed

        - Categorised movie suggestion
            - Movie lists * N

- NetflixGPT
    - Search bar
    - Movie suggestions

