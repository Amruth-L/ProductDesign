const ProductCard = ({ product }) => {
    return (
        <div className="bg-white border rounded-2xl p-4 transition-transform hover:scale-[1.02] shadow-sm">
            <div className="h-40 flex justify-center items-center mb-4">
                <img src={product.image} alt={product.title} className="max-h-full" />
            </div>
            <h3 className="text-gray-800 font-semibold truncate">{product.title}</h3>
            <p className="text-blue 600 font-bold mt-2">$ {product.price}</p>
        </div>
    );
};
export default ProductCard;