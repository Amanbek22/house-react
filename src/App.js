import './App.css';
import Header from './componets/header/Header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/Main.jsx';
import Login from './pages/login/Login.jsx';
import CreateAdd from './pages/createAdd/CreateAdd.jsx';
import DetailCard from './pages/detailCard/DetailCard.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/card/:id" element={<DetailCard />} />
          <Route path="/create-new-add" element={<CreateAdd />} />
          <Route path='*' element={<h1 className='text-center mt-5'>404</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
