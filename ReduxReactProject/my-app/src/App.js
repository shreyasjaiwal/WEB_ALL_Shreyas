import './App.css';
import Header from './Components/Header';
import AllProducts from './Components/AllProducts';
function App() {
  return (
    <div className="App">
     <Header/>
     <AllProducts/>
    <button className='btn'> Checkout</button>
    </div>
  );
}

export default App;
