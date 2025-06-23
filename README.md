# Personal Blog Source Code

This project contains the source code for my personal blog. It's built using a modern JavaScript tech stack with comprehensive mobile responsiveness and advanced features.

## Tech Stack

### Core Framework
*   **React (18.2.0):** A JavaScript library for building user interfaces.
*   **React Router DOM:** For handling navigation within the single-page application.
*   **React Scripts:** Provides the default scripts and configurations for Create React App.

### UI Libraries & Design
*   **Ant Design:** A comprehensive UI design language and React component library.
    - `antd` - Main component library
    - `@ant-design/icons` - Icon components
*   **Chakra UI:** A simple, modular and accessible component library for React.
    - `@chakra-ui/react` - Core Chakra UI components
*   **Emotion:** CSS-in-JS library for styling.
    - `@emotion/react` - Core Emotion library
    - `@emotion/styled` - Styled components for Emotion

### Animation & Motion
*   **Framer Motion:** A production-ready motion library for React with advanced animations.

### Data Visualization
*   **Plotly.js:** A high-level, declarative charting library for interactive data visualizations.
    - `plotly.js` - Core Plotly library
    - `react-plotly.js` - React wrapper for Plotly
*   **Chart.js:** Simple yet flexible JavaScript charting library.
    - `react-chartjs-2` - React wrapper for Chart.js

### Mathematical Content
*   **KaTeX:** Fast, easy-to-use JavaScript library for TeX math rendering.
    - `react-katex` - React component for KaTeX
    - `react-latex-next` - Advanced LaTeX rendering for React

### 3D Graphics & Visualization
*   **Three.js:** 3D graphics library for creating interactive 3D content.
    - `three` - Core Three.js library
    - `@react-three/fiber` - React renderer for Three.js
    - `@react-three/drei` - Useful helpers and abstractions for React Three Fiber

### Document Handling
*   **React PDF:** Display PDF documents in React applications.
    - `react-pdf` - PDF viewer component for React

### Utilities & Tools
*   **React Resizable:** Resizable components for React applications.
*   **SVGO:** SVG optimization tool for better performance.
*   **Resolve URL Loader:** Webpack loader for resolving URLs in CSS.

## Features

### 🎯 **Comprehensive Mobile Responsiveness**
- Touch-friendly navigation with adaptive layouts
- Responsive typography and spacing across all breakpoints
- Mobile-optimized blog reading experience with horizontal scroll for math formulas
- Touch-friendly modals and interactive elements

### 📱 **Advanced UI Components**
- Dark/Light theme switching with system preference detection
- Interactive data visualizations with Plotly.js
- Mathematical content rendering with KaTeX
- PDF document viewing capabilities
- 3D graphics and animations

### 🚀 **Performance Optimizations**
- GPU-accelerated animations for smooth mobile experience
- Optimized image and text rendering
- Reduced motion support for accessibility
- Mobile-specific performance enhancements

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Mobile Optimization

This blog is fully optimized for mobile devices with:

- **Responsive Breakpoints:** 1024px, 768px, 576px, 360px
- **Touch-Friendly Interface:** Minimum 44px touch targets on tablets, 36px on phones
- **Mobile Navigation:** Hamburger menu with smooth drawer navigation
- **Optimized Reading:** Mobile-specific typography and spacing for blog posts
- **Performance:** GPU acceleration and optimized animations for smooth mobile experience
- **Accessibility:** Proper focus states and reduced motion support

## Browser Support

- **Production:** >0.2%, not dead, not op_mini all
- **Development:** Latest Chrome, Firefox, and Safari versions 