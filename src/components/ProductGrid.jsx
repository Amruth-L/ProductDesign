import ProductCard from './ProductCard';
const ProductGrid = ({ items }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {items.map((item) => (
                <ProductCard key={item.id} product={item} />))}
        </div>

    );
};
export default ProductGrid;
