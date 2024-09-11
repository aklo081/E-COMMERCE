import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* JHVFN Stores Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">JHVFN Stores</h2>
            <p className="text-gray-400">
              Your one-stop shop for all things awesome. Explore our range of products and stay tuned for exciting updates.
            </p>
          </div>
          {/* Useful Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li><Link to="" className="hover:text-teal-400">Home</Link></li>
              <li><Link to="about" className="hover:text-teal-400">About</Link></li>
              <li><Link to="/product" className="hover:text-teal-400">Products</Link></li>
              <li><Link to="" className="hover:text-teal-400">Contact Us</Link></li>
            </ul>
          </div>
          {/* Socials Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-teal-400">
                  <i className="fa-brands fa-whatsapp fa-lg"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-teal-400">
                  <i className="fa-brands fa-twitter fa-lg"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-teal-400">
                  <i className="fa-brands fa-instagram fa-lg"></i>
                </a>
              </li>
              <li>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-teal-400">
                  <i className="fa-brands fa-facebook fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-gray-400">2024 &copy; Team collabTech | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
