import type { HeaderProps } from "../../components/constant-components/Header";

// FOOTER CONTENTS

const Footer: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <div className="flex flex-col w-full">
      <hr className="bg-[#e7e7e7] border border-[#e7e7e7] mx-8" />
      <div className="footer flex flex-col w-full justify-between items-center sm:items-start gap-8 p-8 text-[#1A1A1A] dark:text-[#ffffff] bg-white dark:bg-[#090D1F]">
        <img
          src={logo}
          alt="وااو ديزاين"
          width="105"
          height="105"
          className="block rounded-full mb-7.5 sm:mb-1 bg-gray-100 border border-[#ffc98280] shadow-sm shadow-orange-50"
        />

        <ul className="flex flex-col sm:flex-row gap-3.5 items-center text-[20px] mb-7.5 sm:mb-1">
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
          <li>
            <a href="#">RSS feed</a>
          </li>
          <li>
            <a href="#">Add to Feedly</a>
          </li>
        </ul>
        <p className="flex flex-col sm:flex-col md:flex-row text-center sm:text-start w-full text-[20px] leading-8 sm:gap-2">
          <span>Copyright © 2023 </span>
          <span className="hidden md:block">-</span>
          <span>Developed by Wadah Dahi © 2025 </span>
          <span className="hidden md:block">-</span>
          <span>All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
