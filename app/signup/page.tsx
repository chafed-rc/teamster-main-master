import React from 'react';
import { FaApple, FaGoogle, FaGithub } from 'react-icons/fa';

export default function SignUp() {
  return (
    <div className="w-full max-w-xs mx-auto my-16 bg-[181818] border-4 p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#5CB8E4]">Sign Up</h1>

      {/* User Details Form */}
      <div className="border-t pt-6">
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="First Name" className="border p-2 rounded" />
          <input type="text" placeholder="Last Name" className="border p-2 rounded" />
          <input type="tel" placeholder="Phone Number" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <button type="submit" className="bg-[#5CB8E4] hover:opacity-75 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </form>
        <div className="flex flex-col space-y-4 mb-6 mt-6">
            <button className="flex items-center justify-center bg-[#5CB8E4] text-white p-2 rounded hover:opacity-75">
            <FaApple className="mr-2" /> Sign up with Apple
            </button>
            <button className="flex items-center justify-center bg-[#5CB8E4] text-white p-2 rounded hover:opacity-75">
            <FaGoogle className="mr-2" /> Sign up with Google
            </button>
            <button className="flex items-center justify-center bg-[#5CB8E4] text-white p-2 rounded hover:opacity-75">
            <FaGithub className="mr-2" /> Sign up with GitHub
            </button>
        </div>
      </div>

      {/* Log In Link */}
      <div className="text-center mt-6">
        <p className='text-white'>
          Already have an account? <a href="/login" className="text-[#5CB8E4] hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}
