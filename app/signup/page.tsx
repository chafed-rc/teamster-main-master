'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import codeIcon from '../../public/icons/code-solid.svg'; // Update the path to your icon
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailError, setEmailError] = useState('');


  const handleEmailSubmit = () => {
    if (!showEmailInput) {
      setShowEmailInput(true);
    } else if (!email || !/\S+@\S+\.\S+/.test(email)) {
      // Simple regex for email validation - consider a more robust solution for production
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError(''); // Clear any error
      // Add your logic here for what happens when a user submits a valid email
      console.log('Email submitted:', email);
      // Here you might call a function to handle the email sign-up process
      router.push('/signup/createUser');
    }
  };

  return (
      <div className="flex items-center justify-center h-screen">
        <div className="p-10 rounded-lg text-white text-center max-w-md w-full">
          <div className="mb-6 flex justify-center">
            <Image
              src={codeIcon}
              alt="code icon"
              width={50}
              height={50}
            />
          </div>
          <h2 className="text-2xl font-medium mb-6">Create your Teamster account</h2>
          <button className="bg-[#5CB8E4] hover:bg-[#72C6EA] text-white py-3 px-6 rounded-md w-full mb-3 font-medium">Continue with Google</button>
          <button onClick={() => signIn('github')} className="bg-gray-500 hover:bg-gray-400 text-white py-3 px-6 rounded-md w-full mb-3 font-medium">Continue with GitHub</button>
          <button
            onClick={handleEmailSubmit}
            className="bg-gray-500 hover:bg-gray-400 text-white py-3 px-6 rounded-md w-full font-medium relative"
          >
            Continue with Email
          </button>
          {showEmailInput && (
            <div className="animate-slide-in mt-3">
              <input
                type="email"
                placeholder="Email address"
                className="text-white py-3 px-4 rounded-md w-full bg-transparent border-2 border-[#5CB8E4]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              {emailError && <p className="text-red-500 text-xs mt-2">{emailError}</p>}
            </div>
          )}
          <p className="text-gray-400 text-sm mt-6">
            By signing up, you agree to the <a href="/terms" className="text-[#5CB8E4] hover:underline">Terms of Service</a>.
          </p>
        </div>
      </div>
  );
}

