import { useNavigate } from "react-router-dom";

const NewsLetterSection = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col w-full h-full items-center p-8">
      <p
        onClick={() => navigate("/newsletter-page")}
        className="block text-[16px] font-semibold text-[#7F56D9] dark:text-[#7F56D9] mb-3 cursor-pointer"
      >
        Newlatters
      </p>

      <h2 className="block text-[48px] font-semibold text-[#1A1A1A] dark:text-[#ffffff] mb-6">
        Stories and interviews
      </h2>

      <p className="block md:text-center text-[20px] font-normal leading-7.5 text-[#667085] dark:text-[#C0C5D0] mb-10 text-start ">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>

      <div className="flex flex-col items-start sm:items-center w-full h-full gap-2">
        <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-12 px-4 py-3 flex-1 border rounded bg-white dark:border-gray-50 rounded-xl:text-base outline-none"
          />

          <button
            type="button"
            className="cursor-pointer text-[#ffffff] px-5 py-3 rounded-lg bg-[#7F56D9] text-base font-semibold"
          >
            Subscribe
          </button>
        </form>

        <p className="block cursor-pointer text-[14px] text-[#667085] dark:text-[#C0C5D0] leading-5">
          We care about your data in our <u>privacy policy</u>
        </p>
      </div>
    </section>
  );
};

export default NewsLetterSection;
