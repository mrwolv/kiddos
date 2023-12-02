
const HeadlineSecton = () => {
  return (
    <section className='bg-[#fedacd] h-[350px] '>
      <div className='flex items-center justify-between '>
        <div className='hidden mt-8 md:flex '>
          <img src='/Vector-5.svg' alt='' />
        </div>
        <div className='flex flex-col items-center gap-2 p-4 mt-16'>
          <img src='/quote.svg' alt='Quote' />
          <h2 className='ml-4 px-10 text-[2.1em] font-lovesunshine md:text-[1.9em] md:px-16 md:ml-24 text-[#0b315f]'>
            {' '}
            Every product is designed to let your kids be their most comfortable
            selves
          </h2>
        </div>
        <div className='hidden md:relative md:flex md:bottom-9'>
          <img src='/Vector-4.svg' alt='' />
        </div>
      </div>
    </section>
  );
};

export default HeadlineSecton;