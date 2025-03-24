import React from 'react';
import './App.css';
import Projects from './components/Projects';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My Portfolio</h1>
            </header>
            <main>
                <Projects />
            </main>
        </div>
    );
}

export default App;