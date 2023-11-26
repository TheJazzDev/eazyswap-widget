import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='flex items-center justify-center h-screen -mt-12 px-4'>
      <div>
        <h1 className='text-white text-9xl text-center'>
          <span className='text-[#ce9b68]'>4</span>&lt;/&gt;
          <span className='text-[#ce9b68]'>4</span>
        </h1>
        <div className='text-xl mt-24 font-cascadia'>
          <div className='text-[#7eb1e8]'>
            <span className='text-[#c58af9]'>Const</span> {`Error404`}{' '}
            <span className='text-[#c58af9]'>{`=`}</span>{' '}
            <span className='text-yellow-500'>{`()`}</span>{' '}
            <span className='text-[#c58af9]'>{`=>`}</span>{' '}
            <span className='text-yellow-500'>{`{`}</span>
          </div>
          <div className='text-[#96c473]'>
            <span className='text-[#c58af9] ml-6'>{`return (`}</span>{' '}
          </div>
          <div className='ml-12'>
            <span className='text-[#39cadd]'>{`<p>`}</span>
            <span className='text-white'>{`Sorry, We can find the page you are looking for!😭`}</span>
            <span className='text-[#39cadd]'>{`</p>`}</span>
          </div>
          <div className='text-[#c58af9] ml-6'>{`);`}</div>
          <span className='text-yellow-500'>{`}`}</span>
          <span className='text-white'>{`;`}</span>
          <div className='invisible'>{'Space'}</div>
          <div>
            <p className='text-[#7eb1e8]'>
              <span className='text-[#c58af9]'>export default</span> Error404;
            </p>
          </div>
        </div>
        <div className='text-sm text-blue-400 mt-12 text-center cursor-pointer underline'>
          <Link to='/'>Go back home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
