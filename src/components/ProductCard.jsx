const ProductCard = ({ product }) => {
    return (
        <div className="bg-white border rounded-2xl p-4 transition-transform hover:scale-[1.02] shadow-sm">
            <div className="h-40 flex justify-center items-center mb-4">
                <img src={product.image} alt={product.title} className="max-h-full" />
            </div>
            <h3 className="text-gray-800 font-semibold truncate">${product.title}</h3>
            <h3 className="text-blue-300 font-semibold truncate">{product.category}</h3>
            <p className="text-blue-600 font-bold mt-2">$ {product.price}</p>
            <p className="mt-3 text-xs uppercase tracking-widest text-blue-600 font-semibold">Details</p>
            <div className="relative mt-4 overflow-hidden">
                <p className="text-gray-500 text-sm line-clamp-2 group:hover:text-gray-800 transition-colors duration-300">${product.description}
                </p>
            </div>
        </div>
    );
};
export default ProductCard;