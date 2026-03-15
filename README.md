# 🎬 Movie Search App

A modern, responsive web application built with React and Vite that allows users to search, browse, and manage their favorite movies. Powered by The Movie Database (TMDB) API.

## ✨ Features

- **Movie Search** - Search for movies with debounced search queries
- **Browse Movies** - Infinite scroll through popular and trending movies
- **Movie Details** - View comprehensive information about each movie including:
  - Backdrop and poster images
  - Overview and release date
  - Vote average and ratings
  - Budget and revenue information
  - Production companies and languages
- **Favorite Movies** - Add/remove movies to your personal favorites list
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Sticky Navigation** - Fixed navbar stays at the top while scrolling
- **Loading Skeletons** - Smooth loading states with skeleton screens
- **Animated UI** - Smooth transitions and animations with Motion/Framer Motion

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Motion** - Animation library
- **React Icons** - Icon library
- **React Infinite Scroll** - Infinite scroll component
- **Axios** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting
- **Tailwind CSS Vite Plugin** - Tailwind CSS integration

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd "Movie Search"
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```
VITE_REACT_APP_API_KEY=your_tmdb_api_key_here
```

To get your TMDB API key:
- Visit [The Movie Database API](https://www.themoviedb.org/settings/api)
- Sign up for a free account
- Generate an API key

4. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
├── components/          # Reusable React components
│   ├── Header.jsx       # Navigation header with drawer
│   ├── Footer.jsx       # Footer component
│   ├── MovieCard.jsx    # Movie card display
│   ├── Search.jsx       # Search input component
│   ├── Pagination.jsx   # Pagination controls
│   ├── ThemeController.jsx  # Dark mode toggle
│   ├── Skelton.jsx      # Loading skeleton
│   ├── DetailPgeSkelton.jsx # Detail page skeleton
│   └── ...
├── context/
│   └── MoviesContext.jsx # Global state management
├── hooks/
│   ├── UseMovie.jsx     # Custom hook for movie data
│   └── UseDebounce.jsx  # Debounce hook
├── pages/
│   ├── Home.jsx         # Home page with hero carousel
│   ├── Movies.jsx       # Movies list with search & infinite scroll
│   ├── MovieDetail.jsx  # Individual movie details page
│   └── Favorite.jsx     # Favorite movies page
├── services/
│   └── API.jsx          # TMDB API calls
├── reducers/
│   └── MovieReducer.jsx # Movie state reducer
├── utils/
│   └── helpers/         # Helper functions
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🎯 Key Components & Functionality

### Pages
- **Home** - Hero carousel with trending movies and navigation
- **Movies** - Searchable movie catalog with infinite scroll loading
- **MovieDetail** - Detailed information about a selected movie
- **Favorite** - User's bookmarked favorite movies

### Context & State Management
The app uses React Context API via `MoviesContext` to manage:
- Global theme state (light/dark mode)
- Favorite movies list (persisted to localStorage)
- Movie data fetching and caching

### Custom Hooks
- `UseMovie` - Fetches movie data from TMDB API with pagination
- `UseDebounce` - Debounces search input to reduce API calls

### API
- Uses The Movie Database (TMDB) REST API v3
- Implements the following endpoints:
  - `/movie/popular` - Popular movies
  - `/search/movie` - Movie search
  - `/movie/{id}` - Movie details

## 💾 Features Detail

### Search Functionality
- Debounced search prevents excessive API calls
- Real-time result filtering as you type
- Returns zero results message when no matches found

### Infinite Scroll
- Automatically loads more movies as you scroll
- Smooth loading indicators with skeleton screens
- Prevents duplicate items

### Local Storage
- Favorite movies list persists across sessions
- Theme preference (light/dark) saved locally
- Automatic data synchronization

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile (drawer)
- Full navigation for desktop
- Optimized grid layouts for all screen sizes

## 🎨 Styling
- Tailwind CSS for utility classes
- DaisyUI for pre-built components
- Custom theme using data-theme attribute
- Smooth animations and transitions

## 🔒 Error Handling
- Try-catch blocks for API calls
- Fallback images for missing posters/backdrops
- Error boundaries for graceful failures
- Loading states for better UX

## 📝 Environment Variables

Required environment variable in `.env`:
```
VITE_REACT_APP_API_KEY=your_tmdb_api_key
```

## 🚧 Future Enhancements
- User authentication and login
- Advanced filtering (by genre, year, rating)
- Movie recommendations
- Watch list feature
- User reviews and ratings
- Social sharing

## 📄 License
This project is open source and available under the MIT License.

## 👨‍💻 Author
Built with ❤️ as a personal React learning project

---

**Note:** This project requires an active internet connection and a valid TMDB API key to function.
