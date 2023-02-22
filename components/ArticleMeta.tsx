import Image from 'next/image';
import React from 'react';

const ArticleMeta = ({ page }) => {
  return (
    <>
      {/* page cover */}
      <Image
        className='w-full max-w-screen-lg my-4 rounded-lg aspect-video'
        src={page.cover}
        alt=''
        objectFit='cover'
        width={640}
        height={360}
        quality={50}
      />

      {/* page name */}
      <h1 className='my-8'>{page.name}</h1>
      <div className='px-6 py-4 text-sm text-gray-500 bg-gray-100 rounded'>
        <div className='grid grid-cols-3 gap-4'>
          {/* published */}
          <div className='col-span-1'>Published</div>
          <div className='col-span-2'>{page.published}</div>

          {/* author */}
          <div className='col-span-1'>Author</div>
          <div className='col-span-2'>{page.author}</div>

          {/* tags */}
          <div className='col-span-1'>Tags</div>
          <div className='col-span-2'>
            {/* change later */}
            {page.tags.map((tag: string, index: number) => (
              <span key={index}>{`#${tag} `}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleMeta;
