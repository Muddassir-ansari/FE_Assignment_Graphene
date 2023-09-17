import './App.css';
import Footer from './component/footer/Footer';
import FreshLook from './component/freshLook/FreshLook';
import TopBanner from './component/header/TopBanner';
import NavBar from './component/navbar/NavBar';
import ProductListing from './component/products/ProductListing';

function App() {
  return (
    <div className="App">
      <TopBanner/>
      <NavBar/>
      <FreshLook/>
      <ProductListing/>
      <Footer/>  
    </div>
  );
}

export default App;
