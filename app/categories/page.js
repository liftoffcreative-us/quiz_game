'use client';
import { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Modal from '../components/Modal';
import MenuItem from '../components/MenuItem';
import { assignCategoryColors } from '../utils/CategoryUtils';
import Link from 'next/link';
import Image from 'next/image';

export default function CategoriesPage() {
  const [categories, setCategories] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((res) => {
        setCategories(assignCategoryColors(res.data.trivia_categories));
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center w-screen h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {/* <Categories
          allCategories={categories}
          onCatSelect={setSelectedCategory}
        /> */}
        <div className="flex justify-center items-start flex-wrap gap-6 py-4 overflow-y-auto no-scrollbar">
          {categories.map((category, index) => {
            return (
              <MenuItem
                itemKey={category.id}
                itemHref={`/questions/${category.id}`}
                src={`/${category.id}.jpg`}
                alt="Category Image"
                colorCode={category.color}
                displayText={category.name}
              />
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
