import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MenuItem = ({ itemKey, itemHref, src, alt, colorCode, displayText }) => {
  return (
    <Link
      key={itemKey}
      href={itemHref}
      className="border border-white flex flex-col items-center justify-center w-[32%] h-[45%] rounded-lg overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        width={1390}
        height={1200}
        className="w-full min-h-[80%] max-h-[80%]"
      />
      <div
        style={{ '--colorHex': `${colorCode}` }}
        className={
          'bg-[var(--colorHex)] w-full min-h-[20%] flex items-center justify-center font-bold text-[1.2rem] text-center'
        }
      >
        {displayText}
      </div>
    </Link>
  );
};

export default MenuItem;
