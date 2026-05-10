
import React from 'react';
const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-blue-600 h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold">V</div>
                            <span className="text-xl font-black tracking-tighter">VIBE</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Bringing the best products to your doorstep with a touch of vibe.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Shop</h4>
                        <ul className="text-gray-500 text-sm space-y-2">
                            <li className="hover:text-blue-600 cursor-pointer">Electronics</li>
                            <li className="hover:text-blue-600 cursor-pointer">Jewelery</li>
                            <li className="hover:text-blue-600 cursor-pointer">Men's Clothing</li>
                            <li className="hover:text-blue-600 cursor-pointer">Women's Clothing</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Support</h4>
                        <ul className="text-gray-500 text-sm space-y-2">
                            <li className="hover:text-blue-600 cursor-pointer">Shipping Policy</li>
                            <li className="hover:text-blue-600 cursor-pointer">Return & Exchanges</li>
                            <li className="hover:text-blue-600 cursor-pointer">FAQs</li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Stay Connected</h4>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-gray-50 border-none ring-1 ring-gray-200 rounded-lg p-2 text-xs w-full focus:ring-blue-500 outline-none"
                            />
                            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold">Join</button>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs">
                        © 2026 VIBE Storefront. Built for the vibes.
                    </p>
                    <div className="flex gap-6 text-gray-400 text-lg">
                        <span className="hover:text-blue-600 cursor-pointer">𝕏</span>
                        <span className="hover:text-pink-600 cursor-pointer"></span>
                        <span className="hover:text-blue-800 cursor-pointer"></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
