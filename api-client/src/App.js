import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateItem from './components/CreateItem';
import ReadItems from './components/ReadItems';
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create">Create Item</Link></li>
                        <li><Link to="/read">Read Items</Link></li>
                        <li><Link to="/update">Update Item</Link></li>
                        <li><Link to="/delete">Delete Item</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<h1>Welcome to the CRUD App</h1>} />
                    <Route path="/create" element={<CreateItem />} />
                    <Route path="/read" element={<ReadItems />} />
                    <Route path="/update" element={<UpdateItem />} />
                    <Route path="/delete" element={<DeleteItem />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;