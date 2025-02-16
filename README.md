# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  #   s k i l l F o r g e - i n t e r n s h i p 

# Photo Gallery Website App

## Overview

This is a **Photo Gallery Website App** built with **React.js, Vite, and Tailwind CSS**. The app allows users to view images, organize them, add images to a favorites section, and remove them from favorites. It also features a **search functionality** by image ID and supports **dark mode**.

## Features

- View and browse images
- Organize images efficiently
- Add images to a **Favorites** section
- Remove images from **Favorites**
- **Search** for images by ID
- **Dark mode** support
- Uses **Redux Toolkit** for state management
- **State persistence** using local storage
- Integrates **React-Toastify** for notifications
- Fetches image data using **createAsyncThunk API**
- Implements **React Router** for navigation
- Utilizes **React FontAwesome** for icons
- utilize vercel.json

## Tech Stack

- **React.js** (with Vite)
- **Tailwind CSS** (for styling)
- **Redux Toolkit** (for state management)
- **React-Toastify** (for notifications)
- **Local Storage** (for state persistence)
- **React Router DOM** (for routing)
- **React FontAwesome** (for icons)

## Installation

### 1. Clone the repository

```sh
git clone https://github.com/your-username/photo-gallery-app.git
cd photo-gallery-app
```

### 2. Install dependencies

```sh
npm install
```

### 3. Install required packages

```sh
npm install @reduxjs/toolkit react-redux  # Redux Toolkit for state management
npm install react-toastify  # Toast notifications
npm install react-router-dom  # Routing
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons  # FontAwesome for icons
```

### 4. Start the development server

```sh
npm run dev
```

## Redux Store Actions

The app utilizes **Redux Toolkit** for state management, performing the following actions:

- **addToFavorites** → Adds an image to the favorites section
- **removeFromFavorites** → Removes an image from the favorites section
- **handleSearch** → Filters/searches images by ID
- **getDarkMode** → Manages dark mode settings
- **fetchData** → Fetches image data using `createAsyncThunk`

## How It Works

1. **Users can browse images** in the gallery.
2. **Click on an image to add/remove it from favorites**.
3. **Use the search bar** to find an image by ID.
4. **Enable dark mode** for a better visual experience.
5. **Notifications appear** for successful actions using React-Toastify.
6. **State is persisted** even after page reload using local storage.
7. **React Router** is used for navigation between pages.
8. **FontAwesome icons** are used throughout the app.
9. **Redux Toolkit** manages the state of the app.
10. **createAsyncThunk** is used to fetch image data.
11. **Tailwind CSS** is used for styling.
12. **Responsive design** for mobile and desktop views.
13. **Lazy loading** for improved performance.
14. **Pagination** for better organization of images.
15. **Error handling** for unexpected situations.
16. **Code organization** using ES6 modules and folders.
17. **display image in modal** for better view of image.
18. **vercel.json** to handle client side routing in vercel

## Folder Structure

```
photo-gallery-app/
├── public/              # Static assets
├── src/
│   ├── assets/         # Image and asset files
│   ├── components/     # Reusable components
│   │   ├── body/
│   │   │   ├── body.jsx
│   │   │   ├── DarkModeToggle.jsx
│   │   │   ├── lazyLoading.jsx
│   │   │   ├── modal.jsx
│   │   │   ├── pagination.jsx
│   │   │   ├── photoGrids.jsx
│   │   │   ├── searchBar.jsx
│   │   ├── favourites/
│   │   │   ├── favourites.jsx
│   │   ├── header/
│   ├── store/
│   │   ├── store.jsx
│   │   ├── apis.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── vercel.json
```

## Contribution

Feel free to contribute by opening issues or pull requests!

## License

This project is licensed under the MIT License.

---

Happy coding! 🚀
