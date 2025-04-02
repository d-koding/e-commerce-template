import React, { Suspense } from 'react'
import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import { createClient } from '@/utils/supabase/server/createClient'

const ListPage = async ({searchParams}:{ searchParams: { cat?: string; query?: string } }) => {
  const supabase = await createClient();

  const query = (await searchParams).query 
  
  const { data: products, error } = query
  ? await supabase
      .from('products')
      .select('*')
      .order('popularity', { ascending: false })
      .eq('name', query)
  : await supabase
      .from('products')
      .select('*')
      .order('popularity', { ascending: false });
  
    if (error) {
      console.error('Error fetching products:', error.message);
      return <p className='text-primary'>Failed to load products.</p>
    }
  
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
        {/* CAMPAIGN */}
        <div className='hidden bg-pink-50 px-4 sm:flex justify-between h-64'>
            <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
            <h1 className='text-4xl font-semibold leading[48-px] text-gray-700'>Grab up to 50% off on
            <br/> Selected Products</h1>
            <button className='rounded-3xl bg-primary text-white w-max py-3 px-5 text-sm'>Buy Now</button>
            </div>
            <div className='relative w-1/3'>
                {/* <Image src={null} alt="" fill className="object-contain"/> */}
            </div>
        </div>
        {/* FILTER */}
        <Filter/>
        {/* PRODUCTS */}
        <h1 className='mt-12 text-xl font-semibold'>Shoes For You!</h1>
        <Suspense fallback='loading...'>
          <ProductList products={products || []}/>
        </Suspense>
    </div>
  )
}

export default ListPage