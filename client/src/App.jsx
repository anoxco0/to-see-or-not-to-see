
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={'home'} />
        <Route path='/login' element={'login'} />
      </Routes>
    </div>
  );
}

export default App;
