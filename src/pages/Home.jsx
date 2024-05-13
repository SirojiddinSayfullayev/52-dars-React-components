import React from "react";
import MainComponent from '../views/home/main/Main'
import Products from "../views/home/products/Products";
import Contacts from "../views/home/contacts/Contacts";
import Navbar from "../views/navbar/Navbar";
import Footer from "../views/footer/Footer";
import OurClients from "../views/home/ourClients/OurClients";

function Home() {
  return (
    <div className="container">
      
      <Navbar />

      <MainComponent />

      <Products />

      <Contacts />

      <OurClients />

      <Footer />
    </div>
  );
}

export default Home;
