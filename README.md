# 🎬 Movie GPT

> A modern movie recommendation web app powered by GPT and TMDB API 

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-View%20App-red?style=for-the-badge)](https://your-live-demo-link.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/dhruba001/MovieGPT)

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🔧 Environment Variables](#-environment-variables)
- [💡 What I Learned](#-what-i-learned)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🌟 Features

### 🔐 **User Authentication**

- ✅ Sign up, login, and logout functionality
- ✅ Profile management and updates
- ✅ Secure authentication with Firebase Auth

### 🎬 **Browse Experience**

- ✅ Dynamic movie sections with smooth scrolling
- ✅ Background video trailers for immersive experience
- ✅ Fully responsive design across all devices
- ✅ Modern UI with Tailwind CSS

### 🤖 **GPT-Powered Search**

- ✅ Natural language movie queries (_"Show me action movies like John Wick"_)
- ✅ Intelligent search suggestions powered by GPT-3.5 Turbo
- ✅ Real-time movie details via TMDB API integration

### 🧠 **Optimized Performance**

- ✅ Redux Toolkit for predictable state management
- ✅ Custom React hooks for reusable logic
- ✅ Optimized rendering with useMemo and useRef

### 🌐 **Multi-language Support**

- ✅ Support for English, Hindi, Spanish, and more
- ✅ Easy language switching interface

## 🛠️ Tech Stack

<div align="center">

| **Category**         | **Technology**                                                                                                                                                                                                    |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**         | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)               |
| **Styling**          | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)                                                                                           |
| **State Management** | ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)                                                                                                |
| **APIs**             | ![TMDB](https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white) ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white) |
| **Authentication**   | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)                                                                                                       |
| **Deployment**       | ![Firebase Hosting](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)                                                                                       |
| **Testing**          | ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)                                                                                                                   |

</div>

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/dhruba001/MovieGPT.git
   cd MovieGPT
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Then fill in your API keys (see [Environment Variables](#-environment-variables))

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Build and deploy** (optional)
   ```bash
   npm run build
   firebase deploy
   ```

> 🎉 **Success!** Your app should now be running on `http://localhost:5173`

## 📁 Project Structure

```
MovieGPT/
├── 📁 public/
│   ├── favicon.ico
│   └── index.html
├── 📁 src/
│   ├── 📁 components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── MovieCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── ...
│   ├── 📁 redux/               # State management
│   │   ├── movieSlice.js
│   │   ├── gptSlice.js
│   │   └── userSlice.js
│   ├── 📁 hooks/               # Custom React hooks
│   │   ├── usePopularMovies.js
│   │   ├── useGPTSearch.js
│   │   └── ...
│   ├── 📁 pages/               # Page components
│   ├── 📁 utils/               # Utility functions
│   ├── App.jsx
│   └── index.jsx
├── tailwind.config.js
├── package.json
├── .env.example
└── README.md
```

## 🔧 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
# TMDB API Configuration
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here

# OpenAI Configuration
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here

# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

### 🔑 Getting API Keys :

| **Service**    | **How to Get**                                                  | **Documentation**                                 |
| -------------- | --------------------------------------------------------------- | ------------------------------------------------- |
| **TMDB API**   | [Sign up at TMDB](https://www.themoviedb.org/settings/api)      | [TMDB Docs](https://developers.themoviedb.org/3)  |
| **OpenAI API** | [Get API key from OpenAI](https://platform.openai.com/api-keys) | [OpenAI Docs](https://platform.openai.com/docs)   |
| **Firebase**   | [Firebase Console](https://console.firebase.google.com/)        | [Firebase Docs](https://firebase.google.com/docs) |

## 💡 What I Learned

<details>
<summary><strong>🏗️ Frontend Architecture</strong></summary>

- Building scalable React applications with component composition
- Implementing reusable and maintainable component patterns
- Creating efficient file and folder structures
</details>

<details>
<summary><strong>🧠 State Management</strong></summary>

- Managing complex application state with Redux Toolkit
- Creating efficient slices for different data domains
- Implementing predictable state updates and actions
</details>

<details>
<summary><strong>🔌 API Integration</strong></summary>

- Securely integrating third-party APIs (TMDB, OpenAI)
- Handling API authentication and rate limiting
- Error handling and loading states
</details>

<details>
<summary><strong>🔐 Authentication & Security</strong></summary>

- Implementing secure authentication flows with Firebase
- Route protection and user session management
- Handling authentication states across the application
</details>

<details>
<summary><strong>🎨 UI/UX Design</strong></summary>

- Creating modern, responsive interfaces with Tailwind CSS
- Implementing smooth animations and transitions
- Building accessible and user-friendly components
</details>

<details>
<summary><strong>⚡ Performance Optimization</strong></summary>

- Using React hooks (useMemo, useCallback, useRef) effectively
- Implementing lazy loading and code splitting
- Optimizing bundle size and loading times
</details>

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### 🐛 Found a Bug?

If you find a bug, please [open an issue](https://github.com/dhruba001/MovieGPT/issues) with:

- A clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 🙏 Acknowledgments

- **[The Movie Database (TMDB)](https://www.themoviedb.org/)** for providing comprehensive movie data
- **[OpenAI](https://openai.com/)** for the powerful GPT-3.5 Turbo API
- **[Firebase](https://firebase.google.com/)** for authentication and hosting services
- **[Tailwind CSS](https://tailwindcss.com/)** for the utility-first CSS framework
- **[React](https://reactjs.org/)** and the amazing React community

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [Dhruba](https://github.com/dhruba001)**

⭐ **Star this repo if you found it helpful!!**

</div>
