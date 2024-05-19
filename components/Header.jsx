/** @format */

export default function Header() {
  return (
    <>
      <div className='flex items-center justify-center font-extrabold md:pb-4 font-raleway '>
        <h1 className=' text-9xl md:text-[280px] text-center'>
          DESIGN Portfolio
        </h1>
      </div>
      <div className='flex justify-between pb-2 mt-4 md:pb-4 '>
        <div>
          <p>Sahal Nurdin</p>
        </div>
        <div>
          <p>Design Portfolio</p>
        </div>
        <div>
          <p>2020-2024 Highlight</p>
        </div>
      </div>
      <div>
        <img src='/images/ILLUSTRASI1.png' alt='' className='rounded-xl' />
      </div>
    </>
  );
}
