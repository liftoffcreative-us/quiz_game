import React from 'react';
import './Modal.css';
import localFont from 'next/font/local';

const playerFont = localFont({
  src: '../static-fonts/That Sounds Great.otf',
  display: 'swap',
});

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed flex items-center justify-center bg-black bg-opacity-50 w-screen h-screen">
      <div className="relative h-[70%] w-[60%] overflow-y-auto bg-gradient-to-b from-grad-lt-blue to-grad-dk-blue rounded-2xl">
        <button
          className="absolute top-0 right-0 z-10 px-6 py-2 text-3xl text-white font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center justify-center p-6 w-full h-full">
          <h2 className={`${playerFont.className} text-[2rem]`}>
            Choose Your Category
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
