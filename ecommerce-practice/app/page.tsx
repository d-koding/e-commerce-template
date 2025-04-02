import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider  from "@/components/Slider"
import { createClient } from "@/utils/supabase/server/createClient";
import { Suspense } from "react";


const HomePage = async () => {
  const supabase = await createClient();

  const { data: featuredProducts, error: featuredError } = await supabase
    .from('products')
    .select('*')
    .order('popularity', { ascending: false })
    .limit(4);

  const { data: newProducts, error: newError } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(4);

  if (featuredError || newError) {
    console.error('Error fetching products:', featuredError || newError);
  }
  return (
    <div>
      <div className="">
        <Slider/>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h1 className="text-2xl">Featured Products</h1>
          <Suspense fallback={"loading"}>
          <ProductList products={featuredProducts || []} />
          </Suspense>
        </div>
        <div className="mt-24">
          <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categories</h1>
          <CategoryList/>
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h1 className="text-2xl">New Products</h1>
          <Suspense fallback={"loading"}>
          <ProductList products={newProducts || []} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default HomePage



