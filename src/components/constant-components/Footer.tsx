import type { HeaderProps } from "../../components/constant-components/Header";

// FOOTER CONTENTS

const Footer: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <div className="">
      <div className="footer flex flex-col justify-between items-center sm:items-start gap-8 p-8 text-[#1A1A1A] dark:text-[#ffffff] bg-white dark:bg-[#090D1F]">
        <img
          src={logo}
          alt="وااو ديزاين"
          width={"50.33px"}
          height="29.72px"
          className="block rounded-full mb-7.5 sm:mb-1"
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
        <p className="block text-[20px] leading-8">
          Copyright © 2023 - Developed by Wadah Dahi © 2025 - All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
