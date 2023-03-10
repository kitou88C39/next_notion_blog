import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { ArticleMetaProps } from '../types/types';
import { getCover, getDate, getMultiSelect, getText } from '../utils/property';

const ArticleMeta: FC<ArticleMetaProps> = ({ page }) => {
  return (
    <>
      {/* page cover */}
      <Image
        className='w-full max-w-screen-lg my-4 rounded-lg aspect-video'
        src={getCover(page.cover)}
        alt=''
        objectFit='cover'
        width={640}
        height={360}
        quality={50}
      />

      {/* page name */}
      <h1 className='my-8'>{getText(page.properties.name.title)}</h1>
      <div className='px-6 py-4 text-sm text-gray-500 bg-gray-100 rounded'>
        <div className='grid grid-cols-3 gap-4'>
          {/* published */}
          <div className='col-span-1'>Published</div>
          <div className='col-span-2'>
            {getDate(page.properties.published.date)}
          </div>

          {/* author */}
          <div className='col-span-1'>Author</div>
          <div className='col-span-2'>
            {getText(page.properties.author.rich_text)}
          </div>

          {/* tags */}
          <div className='col-span-1'>Tags</div>
          <div className='col-span-2'>
            {/* change later */}
            {getMultiSelect(page.properties.tags.multi_select).map(
              (tag: string, index: number) => (
                <Link key={index} href={`/tags/${tag}`}>
                  <a className='mr-3 text-gray-700 no-underline border-b border-gray-700 border-solid opacity-70'>
                    <span>{`#${tag}`}</span>
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ArticleMeta;
