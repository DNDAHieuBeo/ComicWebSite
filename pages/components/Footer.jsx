import * as React from 'react';
import Image from 'next/image';



const Footer =()=> {
  return (
    <div className='bg-[#252427] py-8 '>
      <div className='mx-auto w-fit justify-center'>
      <img src='/logoFooter.png' alt='' className='w-32 '/>
      <div className='text-white mb-2'>@2022 komiq.com</div>
      </div>
    </div>
  );
}
export default Footer
