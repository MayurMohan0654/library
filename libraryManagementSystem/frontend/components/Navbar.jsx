import React from 'react'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold text-xl">Library App</div>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/books" className="hover:text-gray-300">Books</a>
          <a href="/about" className="hover:text-gray-300">About</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar