"use client";
import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Custom Gaming PC", price: "Starting at $999", img: "/gaming_pc.png" },
    { id: 2, name: "Premium Smartwatch", price: "$249.99", img: "/smartwatch.png" },
    { id: 3, name: "Pro Wireless Headphones", price: "$199.99", img: "/headphones.png" },
    { id: 4, name: "Latest Smartphone", price: "$899.99", img: "/smartphone.png" },
    { id: 5, name: "Ultra-slim Laptop", price: "$1299.99", img: "/laptop.png" },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <section className="featured">
        <div className="container">
          <div className="section-header">
            <h2>All Products</h2>
            <p>Explore our entire catalog of premium gadgets and tech solutions.</p>
          </div>
          
          <div className="featured-grid">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.img} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <div className="price">{product.price}</div>
                <button className="btn btn-primary" style={{ width: '100%' }}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
