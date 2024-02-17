'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import path
import Image from 'next/image';
import codeIcon from '../../../public/icons/code-solid.svg'; // Update the path to your icon

export default function CreateUser() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here, handle the user creation logic
    // router.push('/successPage');
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
            layout='fixed'
          />
        </div>
        <h2 className="text-2xl font-medium mb-6">Finish your Teamster account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="text-black w-full p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="text-black w-full p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="text-black w-full p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="text-black w-full p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="text-black w-full p-2 rounded-md"
              required
            />
          </div>
          <button type="submit" className="bg-[#5CB8E4] hover:bg-[#72C6EA] text-white py-3 px-6 rounded-md w-full">Create Account</button>
        </form>
      </div>
    </div>
  );
}
