import React from 'react';
import laptop from '../../public/assets/laptop.jpg';
import Image from 'next/image'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='mx-auto my-4'>
          <div className='w-[300px] mx-auto my-4'>
            <Image src={laptop} alt='Laptop' width={300} height={300} />
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-blue-500 font-bold '>IMAGINE A PLACE...</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-blue-900'>Manage Your Chat,Server &</h1>
          <p className='text-black'>
          ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
          </p>
          <button className='bg-blue-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;