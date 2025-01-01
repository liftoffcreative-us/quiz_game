import Link from 'next/link';
import React from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import { CATEGORY_COLORS } from '../constants';

const playerFont = localFont({
  src: '../static-fonts/That Sounds Great.otf',
  display: 'swap',
});

const Categories = ({ allCategories }) => {
  // print out categories array
  console.log(allCategories);

  return (
    <div
      className={`${playerFont.className} flex flex-col items-center justify-center w-[90%] h-[90%] bg-gradient-to-b from-grad-lt-blue to-grad-dk-blue rounded-xl`}
    >
      <h1 className="my-6 text-4xl">CATEGORIES</h1>
      <div className="flex justify-center items-start flex-wrap gap-6 w-[100%] h-full py-4 overflow-y-auto no-scrollbar">
        {allCategories.slice(0, 18).map((category, index) => {
          const idNum = category.id;

          // get color value from the array
          const catColor = CATEGORY_COLORS[index % CATEGORY_COLORS.length];

          //pull the color value from the array
          const colorCode = catColor.colorHex;
          //set the color name
          const _colorName = catColor.color_name;

          return (
            <Link
              key={index}
              href={`/questions/${idNum.toString()}`}
              className="border border-white flex flex-col items-center justify-center w-1/5 h-1/3 rounded-lg overflow-hidden"
            >
              <Image
                src={`/${idNum.toString()}.jpg`}
                alt="Category Image"
                width={1390}
                height={900}
                className="w-full h-[75%] bg-cover bg-right"
              />
              <div
                style={{ '--colorHex': colorCode }}
                className={
                  'bg-[var(--colorHex)] w-full h-[25%] flex items-center justify-center font-bold text-[.7rem] text-center'
                }
              >
                {category.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
