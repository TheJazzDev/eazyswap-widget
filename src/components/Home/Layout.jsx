const Layout = ({ children }) => {
  return (
    <div className='text-center mx-auto'>
      <h1 className='text-3xl text-white my-8 font-cascadia'>Coin Widget</h1>
      <ul className='space-y-6'>{children}</ul>
    </div>
  );
};

export default Layout;
