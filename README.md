# YouTube UI Clone

A YouTube-inspired UI built with React and Vite.

🚀 **Live Demo:** https://raju-youtube.vercel.app/

## Features

- Responsive sidebar navigation with category selection
- Video feed displaying most popular videos by category
- Video player page with details, channel info, and comments
- Recommended videos sidebar
- Search bar (UI only)
- Styled with custom CSS

## Project Structure
```
├── public/
├── src/
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── Components/
│   │   ├── Feed/
│   │   │   ├── Feed.css
│   │   │   └── Feed.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.jsx
│   │   ├── PlayVideo/
│   │   │   ├── PlayVideo.css
│   │   │   └── PlayVideo.jsx
│   │   ├── Recomended/
│   │   │   ├── Recomended.css
│   │   │   └── Recomended.jsx
│   │   └── Sidebar/
│   │       ├── Sidebar.css
│   │       └── Sidebar.jsx
│   └── Pages/
│       ├── Home/
│       │   ├── Home.css
│       │   └── Home.jsx
│       └── Video/
│           ├── Video.css
│           └── Video.jsx
├── utils.js
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── .gitignore
```

## Getting Started

1. **Install dependencies:**
   npm install

2. **Start development server:**
   npm run dev

3. **Build for production:**
   npm run build

4. **Preview production build:**
   npm run preview

## API Usage

- Uses the YouTube Data API v3.
- API key is stored in `src/data.js`.

## Utilities

- `valueConverter` (in `utils.js`): Converts numbers to human-readable formats (e.g., 1M, 2K).

## Deployment

This project is deployed on **Vercel**.

🔗 **Live URL:** https://raju-youtube.vercel.app/

## Linting

- ESLint is configured in `eslint.config.js`.
- Run lint checks:
  npm run lint

## License

This project is for educational purposes only.
