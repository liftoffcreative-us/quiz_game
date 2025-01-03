'use client';
import { useState, useEffect } from 'react';
// import Categories from '../components/Categories';
import Modal from '../components/Modal';
import MenuItem from '../components/MenuItem';
import { assignCategoryColors } from '../utils/CategoryUtils';
// import Link from 'next/link';
import Image from 'next/image';
import { CATEGORY_COLORS } from '../constants';
import localFont from 'next/font/local';

const playerFont = localFont({
  src: '../static-fonts/That Sounds Great.otf',
  display: 'swap',
});

export default function CategoriesPage() {
  const [categories, setCategories] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedColorGroupHex, setSelectedColorGroupHex] = useState(null);

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
      <div className="flex flex-col items-center justify-center w-2/3 h-2/3 gap-6">
        <div className={`${playerFont.className} text-[3rem]`}>
          Select Your Color
        </div>
        <div className="flex items-center justify-center gap-4">
          {CATEGORY_COLORS.map((color, index) => (
            <Image
              key={index}
              src={`/star-${color.color_name}.png`}
              width={500}
              height={500}
              alt="Star Color"
              className="w-[12%] cursor-pointer"
              onClick={() => {
                setSelectedColorGroupHex(color.colorHex);
                setModalOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        modalHeaderText="Choose your category"
      >
        <div className="flex justify-center items-start flex-wrap gap-6 py-4 w-full h-full overflow-y-auto no-scrollbar">
          {categories
            .filter((category) => category.color == selectedColorGroupHex)
            .map((category, index) => {
              return (
                <MenuItem
                  key={index}
                  itemKey={`category${category.id}`}
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
