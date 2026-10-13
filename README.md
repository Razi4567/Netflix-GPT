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
- Browse page is rendered in two segements with the first for video background and title and the second for movie categories lists
- Bugfix - Reseting the movie slice after logout 

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

