import ProductImages from '@/components/ProductImages'
import React from 'react'
import { Metadata } from 'next'
import CustomizeProducts from '@/components/CustomizeProducts'
import Add from '@/components/Add'
import { createClient } from "@/utils/supabase/server/createClient"
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: "Shop"
};

const SinglePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  console.log("Slug from params:", slug);

  const supabase = await createClient();

  const { data: productData, error } = await supabase
    .from('products')
    .select(`
      *,
      media (
        url,
        type,
        order
      )
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error("Supabase query error:", error.message);
    return notFound();
  }

  const product = productData;
  if (!product) {
    console.log("No product found for slug:", slug);
    return notFound();
  }

  const mediaItems = product.media || [];

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
    {/* IMG */}
        <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
            <ProductImages items={mediaItems} />
        </div>

    {/* TEXTS */}
        <div className='w-full lg:w-1/2 flex flex-col gap-6'>
            <h1 className='text-4xl font-medium'>{product.name}</h1>
            <p className='text-gray-500'>
                {product.description}
            </p>
            <div className='h-[2px] bg-gray-100'/>
            <div className='flex items-center gap-4'>
                <h3 className='text-xl text-gray-500 line-through'>$59</h3>
                <h2 className='fount-medium text-2xl'>$40</h2>
            </div>
            <div className='h-[2px] bg-gray-100'/>
            <CustomizeProducts />
            <Add />
            <div className='h-[2px] bg-gray-100'/>
            <div className='text-sm'>
                <h4 className='font-medium mb-4'>Title</h4>
                <p>
                    INFO
                </p>
            </div>
            <div className='text-sm'>
                <h4 className='font-medium mb-4'>Title</h4>
                <p>
                    INFO
                </p>
            </div>
            <div className='text-sm'>
                <h4 className='font-medium mb-4'>Title</h4>
                <p>
                    INFO
                </p>
            </div>
        </div> 
    </div>

  )
}

export default SinglePage