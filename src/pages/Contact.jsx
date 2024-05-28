import React, {useState} from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div id="contact">
      <Header />
      
      <Contacts />
      <Footer />
    </div>
  );
}
export default Contact;