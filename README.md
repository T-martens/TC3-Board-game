# TC3 React Webapp

This is a front-end project built with React and Webpack 5. It serves as a template for creating modern web applications using TypeScript.

## Project Structure

```
react-webpack-app
├── public
│   └── index.html         # Main HTML file
│   └── images             # images 
├── src
│   ├── index.tsx          # Entry point of the React application
│   ├── App.tsx            # Main App component
│   ├── components         # Directory for React components
│   │   └── Header         # Header
│   ├── styles             # Directory for styles
│   │   └── index.css      # Global and component-specific styles
│   └── types              # Directory for TypeScript types
│       └── globals.d.ts   # Global type declarations
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
├── webpack.config.js      # Webpack configuration
├── .babelrc               # Babel configuration
├── .eslintrc.js           # ESLint configuration
└── .gitignore             # Git ignore file
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/T-martens/TC3-Board-game.git
   cd TC3-board-game
   ```

2. **Install dependencies:**
   ```
   yarn install
   ```

3. **Run the application:**
   ```
   yarn start
   ```

4. **Build the application for production:**
   ```
   yarn run build
   ```

## Features

- React for building user interfaces
- TypeScript for type safety
- Webpack 5 for module bundling
- ESLint for code linting
- Babel for JavaScript transpilation
- Suitcss for most of the style specifications

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.