# Netflix Clone

## Project Description

This is a Netflix Clone application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application mimics the core functionalities of Netflix, allowing users to browse and watch trailers of movies. It includes features like dynamic video backgrounds, movie lists, and detailed movie information.

## Technologies Used

- **Frontend:**
  - React.js
  - Redux
  - React Router
  - React Icons
  - Tailwind CSS
  - Slick Carousel
  - axios
  - js-cookie
  - jwt-decode
  - react-slick
  - react-spinners
- **Backend:**
  - Node.js
  - Express.js
  - bcrypt
  - cloudinary
  - cookie-parser
  - cors
  - dotenv
  - express-fileupload
  - express-session
  - jsonwebtoken
  - mongoose
  - nodemon
  - validator

## Features

- **Home Page:** Displays a dynamic background video and featured movie details.
- **Movie List:** Shows a list of now-playing, popular, top-rated, and upcoming movies.
- **Movie Details:** Provides detailed information about each movie, including trailers.
- **Search Functionality:** Allows users to search for movies.
- **Responsive Design:** Optimized for various screen sizes.

## Endpoints

### Backend API Endpoints

## Endpoints
### Authentication API Endpoints

1. **POST /api/auth/signup**
   - Description: Registers a new user.
   - Request Body: JSON object containing `username`, `email`, and `password`.
   - Response: JSON object with success message or error.

2. **POST /api/auth/login**
   - Description: Logs in an existing user.
   - Request Body: JSON object containing `email` and `password`.
   - Response: JSON object with user token or error message.

### IMDb API Endpoints

1. **GET /api/movies/now_playing**
   - Description: Fetches a list of now-playing movies from IMDb.
   - Response: JSON array of movie objects.

2. **GET /api/movies/popular**
   - Description: Fetches a list of popular movies from IMDb.
   - Response: JSON array of movie objects.

3. **GET /api/movies/top_rated**
   - Description: Fetches a list of top-rated movies from IMDb.
   - Response: JSON array of movie objects.

4. **GET /api/movies/upcoming**
   - Description: Fetches a list of upcoming movies from IMDb.
   - Response: JSON array of movie objects.

5. **GET /api/movies/:id**
   - Description: Fetches detailed information about a specific movie from IMDb.
   - Response: JSON object of movie details.

## Hosted Link

- The application is hosted at: [NETFLIX-DEMO](https://netflix-2-0-blue.vercel.app/)

## Developer Information

- **LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/muzammil633/)
- **GitHub:** [GitHub Profile](https://github.com/muzammilx07)

## API Used

- **The Movie Database (TMDb) API**
  - Base URL: `https://api.themoviedb.org/3`
  - Documentation: [TMDb API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)

### Prerequisites

- Node.js
- npm
- MongoDB


### Contact

- For any inquiries or issues, please contact me at muzammilxshareef@gmail.com.
