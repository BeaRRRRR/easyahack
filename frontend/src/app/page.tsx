import React from 'react'
import Link from 'next/link'

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <img src="/assets/logo.png" className="w-48 mb-8" alt="Logo" />

    <h3 className="text-3xl mb-8">Welcome to FanLink</h3>

    <h5 className="text-xl mb-4">I am a...</h5>

    <div className="flex justify-between w-1/3">
      <Link href="/fan">
        <button className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700">Fan</button>
      </Link>
      <Link href="/creator/login">
        <button className="bg-red-600 text-white rounded py-2 px-4 hover:bg-red-700">Creator</button>
      </Link>
    </div>
  </div>
)

export default Home
