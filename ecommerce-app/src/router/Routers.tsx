import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Shop } from "../pages/Shop";
import { Routes, Route } from "react-router-dom"; // import your route components too

 
 
  export function MainRoutes () {
      return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
    </Routes>
      );
  }