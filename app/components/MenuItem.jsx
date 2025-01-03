import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MenuItem = ({ itemKey, itemHref, src, alt, colorCode, displayText }) => {
  return (
    <Link
      key={itemKey}
      href={itemHref}
      className="border border-white flex flex-col items-center justify-center w-1/5 h-1/3 rounded-lg overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        width={1390}
        height={900}
        className="w-full h-[75%] bg-cover bg-right"
      />
      <div
        style={{ '--colorHex': `${colorCode}` }}
        className={
          'bg-[var(--colorHex)] w-full h-[25%] flex items-center justify-center font-bold text-[.7rem] text-center'
        }
      >
        {displayText}
      </div>
    </Link>
  );
};

export default MenuItem;
