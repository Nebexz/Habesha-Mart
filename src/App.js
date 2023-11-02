
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
function App() {
  return (
    <>
      <Navbar />
      <switch >
        <Routes exact path="/" component={Home} />
        <Routes exact path="/products" component={Products} />
      </switch>
      <Home />
      <Products />
    </>
  );
}

export default App;
