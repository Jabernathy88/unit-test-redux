import React from 'react';
import './App.css';
import PostsList from "./components/PoststList";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2 className="app-hello">Hello from App.js</h2>
      </header>
      <PostsList />
    </div>
  );
}

export default App;
