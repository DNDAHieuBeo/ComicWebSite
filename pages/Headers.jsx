import * as React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="bg-white border-b-2 border-black flex flex-col md:flex-row  justify-between items-center w-full p-4 md:p-0 ">
        <Link href="/">
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-32 md:w-52 h-auto cursor-pointer mb-4 md:mb-0 !min-w-0"
          />
        </Link>

        <div className="flex flex-row border-2 border-black rounded-lg my-auto items-center h-12 px-2 shadow-lg mb-4  flex-grow md:flex-grow-0 mx-4 md:mx-0">
          <img src="/searchIcon.jpg" alt="" className="h-8 w-8 block" />
          <input
            className="h-8 md:w-[40rem] w-full my-auto focus:outline-none pl-2"
            placeholder="Tìm kiếm tên truyện"
          />
        </div>
        <Link href="/Login">
          <a className="bg-[#252427] text-[#EAFA34] hover:text-[#252427] hover:bg-[#EAFA34] px-4 py-2 md:py-8 border-black transition duration-150 md:border-x-2 border-2">
            Đăng nhập/Đăng ký
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
