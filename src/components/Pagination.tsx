import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const prevIcon = isDark
    ? "/icons/arrow-left-light-for-dark.png"
    : "/icons/arrow-left-dark-for-light.png";

  const nextIcon = isDark
    ? "/icons/arrow-right-light-for-dark.png"
    : "/icons/arrow-right-dark-for-light.png";

  const prevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex flex-col sm:flex-row w-full h-full justify-between items-center mt-4">
      <button
        onClick={prevPage}
        className="w-30 h-10 flex gap-3 items-center justify-center rounded-lg text-[#667085] dark:text-[#EFEFEF]"
      >
        <img src={prevIcon} alt="prev" className="w-4 h-4" />
        <p className="block">Previous</p>
      </button>
      <div className="w-fit flex flex-row gap-0.5">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 px-3 py-1 text-[#667085] rounded-lg flex items-center justify-center ${
              page === currentPage
                ? "bg-[#F9F5FF] flex text-[#7F56D9] dark:bg-[#2A1E46] dark:text-[#D6BBFB]"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={nextPage}
        className="w-30 h-10 flex gap-3 items-center justify-center rounded-lg text-[#667085] dark:text-[#EFEFEF]"
      >
        <p className="block">Next</p>
        <img src={nextIcon} alt="next" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
