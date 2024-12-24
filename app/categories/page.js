
"use client"
import { useState, useEffect} from 'react';
import Categories from "../components/Categories";

export default function Home() {
    const [categories, setCategories] = useState(null);
    const [isLoading, setLoading] = useState(true)

   useEffect(() => {
          fetch('/api/categories')
            .then((res) => res.json())
            .then((categories) => {
              setCategories(categories)
              setLoading(false)
              
            })
        }, [])

        if (isLoading) return <p>Loading...</p>

  return (
    <div className="flex items-center justify-center w-screen h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Categories allCategories={categories.data.trivia_categories} />
    </div>
  );
}
