/** @format */

export default function LandingPage() {
  return (
    <>
      <div className='py-4 mt-4 font-bold font-raleway md:mt-44 '>
        <h1 className='pb-4 text-[#EB5E28]'>Sahal's Collection</h1>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
          <div className='grid gap-4'>
            <div>
              <img
                src='/images/ORANG.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
            <div>
              <img
                src='/images/PICT6.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                src='/images/TANGAN.png'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
            <div>
              <img
                src='/images/CHARACTER2.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                src='/images/CHARACTER2.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
            <div>
              <img
                src='/images/CHARACTER2.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className='grid gap-2 mt-4 md:py-4 md:gap-4 md:mt-44'>
        <div className='p-4 md:p-8 bg-[#EB5E28] max-h-screen rounded-xl'>
          <div className='pb-3 md:pb-6'>
            <h1 className='text-xl font-extrabold md:text-3xl font-raleway'>
              Diverse
            </h1>
            <p className='text-lg font-light md:text-2xl'>
              Embrace Different Artistic Expressions
            </p>
          </div>
          <div className='md:h-72 sm:h-50'>
            <img
              src='/images/CHARACTER2.jpg'
              alt=''
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='p-8 bg-[#EB5E28] max-h-screen rounded-xl'>
            <div className='pb-6'>
              <h1 className='text-3xl font-extrabold font-raleway'>
                Supportive
              </h1>
              <p className='text-2xl font-light'>Help Artist thrive</p>
            </div>
            <div className=' h-72'>
              <img
                src='/images/CHARACTER2.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
          </div>
          <div className='p-8 bg-[#EB5E28] max-h-screen rounded-xl'>
            <div className='pb-6'>
              <h1 className='text-3xl font-extrabold font-raleway'>
                Explorative
              </h1>
              <p className='text-2xl font-light'>Discover unseen art forms</p>
            </div>
            <div className='overflow-auto h-72'>
              <img
                src='/images/CHARACTER2.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
