"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
// useState would rerender at every keytype!!


const SearchBar = () => {
    const [isTyping, setIsTyping] = useState(false);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        console.log(value);
        setIsTyping(value.trim() !== "");

        if (value) {
            params.set("query", value);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`, {scroll: false});
    }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
    <label htmlFor="search" className="sr-only">
        Search
    </label>

    <input 
    className="peer block w-1/2 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
    placeholder="search"
    defaultValue={searchParams.get('query')?.toString()}
    onChange={(e) => {
        handleSearch(e.target.value);
    }}
    />
    <MagnifyingGlassIcon
        className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
        aria-hidden="true"
      /> 
    </div>
  )
};

export default SearchBar