# Redux Fetch Posts

## Description
A simple React application that fetches posts from `https://jsonplaceholder.typicode.com/posts` using Redux for state management. The application demonstrates the use of Redux for handling API requests, loading, and error states in a React app.

## Features
- Fetches posts from a public API (`jsonplaceholder.typicode.com/posts`).
- Displays the list of posts with the title and body.
- Handles loading state with a `"Loading..."` message while data is being fetched.
- Displays error messages if the fetch request fails.
- Uses Redux for managing API data, loading, and error states.

## Technologies Used
- React
- Redux
- Redux Thunk
- JavaScript
- CSS (for basic styling)

## Installation

### Prerequisites:
Ensure you have `Node.js` and `npm` installed on your machine.

### Steps to Run the Project Locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vdabral/Fetching-API-Data-with-Redux
   ```

2. **Navigate to the project directory:**

   ```bash
   cd redux-fetch-posts
   ```

3. **Install dependencies:**

   Install all the required dependencies using npm:

   ```bash
   npm install
   ```

4. **Start the development server:**

   Run the app using:

   ```bash
   npm start
   ```

   This will start the app and you can access it at `http://localhost:3000`.

## Usage
- The app will display `"Loading..."` while the posts are being fetched.
- Once the posts are successfully fetched, they will be displayed with their titles and bodies.
- If the API fetch fails, an error message will be displayed.

## File Structure
```
src/
├── components/
│   ├── PostList.jsx         # Component for displaying posts
├── redux/
│   ├── actionTypes.js       # Action types for Redux actions
│   ├── actions.js           # Action creators to handle API requests
│   ├── reducer.js           # Reducer for managing posts state
│   └── store.js             # Redux store setup
├── App.js                   # Main App component
├── index.js                 # Entry point for the application
└── index.css                # Basic styles for the application
```
