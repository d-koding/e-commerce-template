import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/Product';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products && products.length > 0 ? (
        products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-4"
          >
            <div className="relative w-full h-80 group">
              <Image
                src={product.hoverImage || 'https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover rounded-md"
              />
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="absolute object-cover rounded-md z-10 group-hover:opacity-0 transition-opacity ease-in-out duration-500"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">${product.price}</span>
            </div>
            <div className="text-sm text-gray-500">
              {product.description || 'No description available'}
            </div>
            <button className="rounded-2xl ring-1 ring-primary w-max py-2 px-4 text-xs hover:bg-primary">
              Add to Cart
            </button>
          </Link>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;