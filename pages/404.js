import React, { useEffect } from 'react';
import {useRouter} from 'next/router';

const NotFound = () => {

  const routers = useRouter();
  
  useEffect(()=>{        
    setTimeout(() => {
        routers.push('/contact');
    },3000)
  },[]);

  return (
    <div className='container'>
      <h2>Page Not found, please check your url.</h2>
    </div>
  )
}

export default NotFound