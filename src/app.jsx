import React, { useState, useEffect } from 'react';
import ProductGrid from './components/ProductGrid';
import Navbar from './components/Navbar';

const App = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("fetch error:", err));
    }, []);

    const filteredItems = products.filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-500 p-6">
            <Navbar />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">API FETCH </h1>
                <input
                    type="text"
                    placeholder="Search locally..."
                    className="mb-8 p-3 w-full max-w-sm rounded-lg border-2 border-transparent focus:border-blue-500 outline-none shadow-sm transition-all"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {products.length > 0 ? (
                    <ProductGrid items={filteredItems} />
                ) : (
                    <div className="flex justify-center mt-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}

                {products.length > 0 && filteredItems.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">No products found matching "{searchTerm}"</p>
                )}
            </div>
        </div>
    );
};

export default App;