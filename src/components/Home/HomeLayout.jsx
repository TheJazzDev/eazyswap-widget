const HomeLayout = ({ children }) => {
  return (
    <div className='text-center mx-auto mt-24 mb-12 lg:mb-0'>
      <h1 className='text-xl md:text-3xl text-white my-8 font-cascadia'>
        Coin Widget
      </h1>
      <ul className='px-4 lg:px-0 space-y-6 lg:space-y-0 flex flex-col lg:flex-row lg:justify-center flex-wrap lg:gap-6 max-w-5xl mx-auto'>
        {children}
      </ul>
    </div>
  );
};

export default HomeLayout;
