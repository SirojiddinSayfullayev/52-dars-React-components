import React from "react";
import MainComponent from '../views/home/main/Main'
import Products from "../views/home/products/Products";
import Contacts from "../views/home/contacts/Contacts";
import Navbar from "../views/navbar/Navbar";
import Footer from "../views/footer/Footer";

function Home() {
  return (
    <div className="container">
      
      <Navbar />

      <MainComponent />

      <Products />

      <Contacts />

      <Footer />
    </div>
  );
}

export default Home;
