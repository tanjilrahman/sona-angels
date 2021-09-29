const Success = () => {
  return (
    <div className='flex h-screen bg-primary p-2'>
      <div className='p-6 rounded-xl space-y-2 m-auto bg-white'>
        <h3 className='font-display text-xl md:text-2xl font-bold'>
          Thank you!
        </h3>
        <p className='md:pr-4'>Your form submission has been received </p>

        <div className='text-primary font-bold'>
          <a
            href='https://www.sonajewelers.com/'
            className='flex space-x-1 items-center hover:underline'
          >
            <p>Go to Sona Jewelers</p>
            <img src='/images/arrow_forward_black_24dp.svg' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
