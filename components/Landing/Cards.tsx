import React from 'react';
import Single from '../../public/assets/single.png';
import Double from '../../public/assets/double.png';
import Triple from '../../public/assets/triple.png';
import Image from 'next/image';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-blue-500'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {/* First Div */}
          <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded hover:scale-105 duration-300'>
                  <Image src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c18a9cff186bd3731704_Create%20an%20invite-only%20place%20where%20you%20belong.svg" alt="/" width={1000} height={1000} />
              <h2 className='text-2xl font-bold text-center py-8 mt-5 text-black'>Create an invite-only place where you belong</h2>
              <p className='text-center text-1xl font-bold text-slate-500'>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
              <button className='bg-blue-500 w-[200px] rounded font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          {/* Second Div */}
          <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded hover:scale-105 duration-300'>

                  <Image src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c1b717efff2306ef179e_Where%20hanging%20out%20is%20easy.svg" alt="/" width={1000} height={1000} />
           
              <h2 className='text-2xl font-bold text-center py-8 mt-5 text-black'>Where hanging out is easy</h2>
              <p className='text-center text-1xl font-bold text-slate-500'>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
              <button className='bg-blue-500 w-[200px] rounded font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          {/* Third Div */}
          <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded hover:scale-105 duration-300'>

                  <Image src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c1d8348e5c81ca608138_From%20few%20to%20a%20fandom.svg" alt="/" width={1000} height={1000} />
           
              <h2 className='text-2xl font-bold text-center py-8 mt-5 text-black'>From few to a fandom</h2>
              <p className='text-center text-1xl font-bold text-slate-500'>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
              <button className='bg-blue-500 w-[200px] rounded font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
