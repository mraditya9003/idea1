import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <a href="/" className="logo">BookmyTruckNow</a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/trucks">Trucks</a></li>
            <li><a href="/bookings">Bookings</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="App-content">
        <section className="hero">
          <div className="hero-content">
            <h1>Book a Truck Today</h1>
            <p>Efficient and reliable truck booking service</p>
            <a href="/book-now" className="cta-button">Book Now</a>
          </div>
        </section>
        <section className="features">
          <div className="feature">
            <i className="fas fa-truck"></i>
            <h3>Wide Selection of Trucks</h3>
            <p>Choose from a diverse range of trucks to suit your needs.</p>
          </div>
          <div className="feature">
            <i className="fas fa-calendar-check"></i>
            <h3>Flexible Booking</h3>
            <p>Book trucks at your convenience with flexible scheduling options.</p>
          </div>
          <div className="feature">
            <i className="fas fa-check-circle"></i>
            <h3>Reliable Service</h3>
            <p>Count on us for reliable and on-time truck delivery services.</p>
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 TruckBooking. All rights reserved.</p>
        <p>Powered By Aditya&Team </p>
      </footer>
    </div>
  );
}

export default App;
