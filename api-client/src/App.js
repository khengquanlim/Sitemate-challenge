import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateItem from './components/CreateItem';
import ReadItems from './components/ReadItems';
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';
import Header from './components/Header/Header';

function App() {
    return (
      <Router>
        <Header />
        <div className="App">
          <Routes>
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