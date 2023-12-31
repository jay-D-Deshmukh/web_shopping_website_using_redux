import Nav from "./Componants/Nav";
import Home from "./Componants/Home";
import Wishlist from "./Componants/Wishlist";
import Cart from "./Componants/Cart";
import Footer from "./Componants/Footer";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./Store/Store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Wishlist" element={<Wishlist />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
