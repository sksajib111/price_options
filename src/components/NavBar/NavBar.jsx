import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from '../Link/Link';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '*', name: 'NotFound' }
];
  return (
    <nav className='bg-slate-300 p-6 text-2xl'>
      
      <div className='text-2xl md:hidden' onClick={()=> setOpen(!open)} >
        {
          open === true ?<IoClose /> : <HiMenu />
        }
      </div>
      <ul className={`md:flex duration-1000 absolute left-16 md:static ${open ? 'top-16': '-top-80'} rounded-2xl bg-slate-200`}>
        {routes.map(route => <Link key={route.id} route={route}></Link>)}
      </ul>
    </nav>
  );
};

export default NavBar;