import { SignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { Link } from 'lucide-react';
import React from 'react';
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-blue-700 font-bold p-2'>
          GROWING WITH FUNCTION
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          FUN WITH <span className='text-blue-500'>FUNCTION</span>
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible for
          </p>
          
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Channels, Servers, Groups & Chats <br />Manage With Us</p>
        <SignedIn>
          <a href='/setup' className='bg-blue-600 w-[200px] rounded font-medium my-6 mx-auto py-3 text-black'>Get Started
          </a>
        </SignedIn>
        <SignedOut>
          <div className='flex'>
        <a href='/sign-in' className='bg-blue-600 w-[150px] rounded font-bold my-6 mx-auto py-3 text-black'>Sign in</a>
          <a href='/sign-up' className='bg-blue-600 w-[150px] rounded font-bold my-6 mx-auto py-3 text-black'>Sign Up</a>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default Hero;
