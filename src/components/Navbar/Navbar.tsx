const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-[999] flex justify-between items-center py-8 px-14 !bg-transparent">
      <img src="/doms_logo.jpg" alt="DOMS Logo" className="h-12 cursor-pointer" />
      <i className="ri-align-justify text-[38px] text-[#111] cursor-pointer"></i>
    </div>
  );
};

export default Navbar;
