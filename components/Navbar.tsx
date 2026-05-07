"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl text-red-600">LuxuryTaste</h1>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="#reservation"
          className="bg-red-600 text-white px-4 py-2 rounded-full text-sm"
        >
          Book Table
        </a>
      </div>
    </header>
  );
}
