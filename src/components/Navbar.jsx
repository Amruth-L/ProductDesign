import React from 'react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    {/* Changed to bg-blue-600 so white 'V' actually shows up */}
                    <div className='bg-blue-600 h-10 w-10 rounded-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform cursor-pointer shadow-lg shadow-blue-200'>
                        <span className='text-white font-black text-xl'>V</span>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-gray-800 tracking-tight leading-none'>Venus</h1>
                        <p className='text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase'>Storefront</p>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-500">
                    <a href="https://www.catalogclothing.com.au/?srsltid=AfmBOoo2KbJfmwQuOrquyGfds_KnCk5sFGGVGWQfwxPMj_UqGwpxDWJH" className="hover:text-blue-600 transition-colors">Catalog</a>
                    <a href="https://www2.hm.com/en_in/men/new-arrivals/clothes.html?srsltid=AfmBOor8s6FACwrkikKOneZOfkQsYNutbuF5kgjRI5mOE7YtcdAuL-RS" className="hover:text-blue-600 transition-colors">Trending</a>
                    <a href="https://amitoje.com/product-display-stands/" className="hover:text-blue-600 transition-colors">Support</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;