// ui.js

import { cart, addToCart, removeFromCart, calculateTotal } from './cart.js';

export function displayBooks(books) {
  const booksContainer = document.getElementById('booksContainer');
  booksContainer.innerHTML = "";

  books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.className = "book";

    bookDiv.innerHTML = `
      <img src="${book.image}" alt="${book.title}" width="150" height="200">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Price: ₹${book.price}</p>
      <p>Availability: ${book.availability}</p>
      <button ${book.availability === "out of stock" ? "disabled" : ""} data-index="${index}">Add to Cart</button>
    `;

    booksContainer.appendChild(bookDiv);
  });

  // Add event listeners for "Add to Cart" buttons
  const buttons = booksContainer.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const bookIndex = button.dataset.index;
      addToCart(books[bookIndex]);
      updateCartUI();
    });
  });
}

export function updateCartUI() {
  const cartContainer = document.getElementById('cartContainer');
  cartContainer.innerHTML = "";

  cart.forEach((book, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <img src="${book.image}" alt="${book.title}" width="50" height="70">
      ${book.title} - ₹${book.price} 
      <button data-index="${index}">Remove</button>
    `;
    cartContainer.appendChild(itemDiv);

    itemDiv.querySelector('button').addEventListener('click', () => {
      removeFromCart(index);
      updateCartUI();
    });
  });

  const totalDiv = document.getElementById('totalPrice');
  totalDiv.textContent = "Total: ₹" + calculateTotal();
}
