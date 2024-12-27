import Link from 'next/link';
import React from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';

const playerFont = localFont({
  src: '../static-fonts/That Sounds Great.otf',
  display: 'swap',
});

const Categories = ({ allCategories }) => {
  // print out categories array
  console.log(allCategories);


  return (
    <div className={`${playerFont.className} flex flex-col items-center justify-center w-3/4 h-3/4 bg-gradient-to-b from-grad-lt-blue to-grad-dk-blue rounded-xl`}>
      <h1 className="my-6 text-4xl">CATEGORIES</h1>
      <div className="flex justify-center items-start flex-wrap gap-6 w-[100%] h-full py-4 overflow-y-auto">
        {allCategories.slice(0, 18).map((category, index) => {
          const idNum = category.id;
          // Look at the index of the category to determine a color to associate with it (we can pass the "color_name" value to the ring question to determine which ring to mark as "completed").
          const colors = [
            {
              color_name: 'game-purple',
              colorHex: '#862dba',
              colorIds: [0, 6, 12, 18],
            },
            {
              color_name: 'game-blue',
              colorHex: '#00b3ff',
              colorIds: [1, 7, 13, 19],
            },
            {
              color_name: 'game-red',
              colorHex: '#cf1120',
              colorIds: [2, 8, 14, 20],
            },
            {
              color_name: 'game-orange',
              colorHex: '#ed8c2b',
              colorIds: [3, 9, 15, 21],
            },
            {
              color_name: 'game-green',
              colorHex: '#3eb53e',
              colorIds: [4, 10, 16, 22],
            },
            {
              color_name: 'game-pink',
              colorHex: '#fc2aaf',
              colorIds: [5, 11, 17, 23],
            },
          ];

          //filter the color array to match the index of the category
          const setColor = colors.filter((color) =>
            color.colorIds.includes(index)
          );
          //pull the color value from the array
          const colorCode = setColor[0].colorHex;
          //set the color name
          const colorName = setColor[0].color_name;

          return (
            <Link
              key={index}
              href="/questions"
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
