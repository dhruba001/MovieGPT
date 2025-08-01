🚀 Netflix GPT
Netflix GPT is a Netflix-inspired movie recommendation web app powered by GPT and TMDB. I built this app from scratch using React, Vite, Tailwind CSS, Firebase, Redux Toolkit, and the OpenAI GPT-3.5 Turbo API.

🎯 Features
User Authentication: Sign up, login, logout, and update your profile using Firebase Authentication.

Browse Page:

Dynamic movie sections with scrollable cards and background video trailers.

Fully responsive design, styled with Tailwind CSS.

GPT‑Powered Search:

Natural language movie queries (e.g., “find me top sci-fi movies from 2010s”).

GPT generates search suggestions and the app pulls detailed data from the TMDB API.

Optimized State Management: Centralized app state with Redux Toolkit, including custom slices for movies, GPT results, and user info.

Custom Hooks: Reusable hooks for fetching movies, handling authentication, and GPT search.

Multi-language Support: Easily switch between languages like English, Hindi, and Spanish (bonus feature).

Production-Ready Build: Hosted on Firebase with optimized performance and clean, maintainable code.

🛠 Getting Started
Clone this repository

Add a .env file in the root directory:

ini
Copy
Edit
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_OPENAI_API_KEY=your_openai_key
Install dependencies:

bash
Copy
Edit
npm install
Start the dev server:

bash
Copy
Edit
npm run dev
Build & Deploy (Firebase Hosting):

bash
Copy
Edit
npm run build
firebase deploy
🧩 Tech Stack
Purpose	Technology
UI	React + Vite
Styling	Tailwind CSS
State Management	Redux Toolkit
Data/API	TMDB API, OpenAI GPT
Authentication	Firebase Auth
Deployment	Firebase Hosting
Testing	Jest, React Testing Lib

📂 Project Structure
bash
Copy
Edit
/src
  /components       # UI components (Header, MovieCard, SearchBar, etc.)
  /redux
    movieSlice.js
    gptSlice.js
    userSlice.js
  /hooks            # Custom hooks: usePopularMovies, useGPTSearch, etc.
  App.jsx
  index.jsx
public/
tailwind.config.js
package.json
.env.example
💡 What I Learned
Building this app taught me:

Frontend Architecture: How to organize a real-world React app with scalable folder structure, reusable components, and maintainable code.

State Management: Setting up Redux Toolkit for clean, predictable global state and advanced patterns like memoization and selectors.

API Integration: How to connect with TMDB and OpenAI, handle async flows, secure API keys, and manage API limits/errors.

Authentication: Implementing full auth flows with Firebase, handling protected routes, and cleaning up listeners.

UI/UX: Using Tailwind CSS for modern, mobile-friendly interfaces and enhancing user experience.

Performance Optimization: Using hooks like useMemo and useRef, and improving component render performance.

Deployment: Building, testing, and deploying the app to Firebase Hosting for a live, production-grade experience.

🚀 Live Demo
Live App Link

🙏 Acknowledgments
Thanks to the open-source community for amazing tools like React, TMDB, Tailwind CSS, Firebase, and OpenAI!

🏁 License & Contribution
Feel free to fork, use, or improve this project. If you fix bugs or add cool features (like more languages, better error handling, or new UI ideas), pull requests are welcome.
Licensed under MIT.

