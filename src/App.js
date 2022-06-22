import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import Home from './pages/Home';
import Category from './pages/Category';
import CategoryMeals from './pages/CategoryMeals';
import Contact from './pages/Contact';
import MealDetail from './pages/MealDetail';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="flex-shrink-0">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/category_meal/:category" element={<CategoryMeals />} />
              <Route path="/meal/:idmeal" element={<MealDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
   
  );
}

export default App;
