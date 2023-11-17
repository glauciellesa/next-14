import Link from 'next/link';
import React from 'react';

const Navabar = () => {
  return (
    <ul className='flex gap-3 justify-end p-5'>
      <li><Link href="/">Home</Link> </li>
      <li><Link href="/about">About us</Link> </li>
      <li><Link href="/article">Article</Link> </li>
      <li><Link href="/login">Login</Link> </li>
      <li><Link href="/logout">Logout</Link> </li>
    </ul>
  );
};

export default Navabar;