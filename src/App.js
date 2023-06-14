import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Champion from './Components/Champion/Champion';
import { UserStorage } from './UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <UserStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="champion/:name" element={<Champion />} />
          </Routes>
        </BrowserRouter>
      </UserStorage>
    </div>
  );
}

export default App;
