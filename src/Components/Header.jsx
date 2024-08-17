import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between px-5 py-5 text-center'>
        <div className='text-center'>
            <p className='text-center'>Online Shop</p>
        </div>
        <div>
            <button className='border px-6 py-2 relative '>Cart
            
            <span className='border px-2  absolute  top-0 right-0  translate-x-1/2 bg-red-600 text-white inline-block'>1</span>
            </button>

        </div>
    </header>
  )
}

export default Header