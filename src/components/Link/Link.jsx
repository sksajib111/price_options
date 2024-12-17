import React from 'react';

const Link = ({route}) => {
  return (
    <div>
      <li className=' hover:bg-slate-400 p-2 m-2 rounded-xl'>
        {/* <link rel="stylesheet" href={route.path} name={route.name} />
         */}
         <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;