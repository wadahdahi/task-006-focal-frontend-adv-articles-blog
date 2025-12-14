// TYPE DEFINITION FOR COLOR PAIR
export type ColorPair = { bg: string; text: string };

// COLOR PAIRS ARRAY (LIGHT BG AND DARK TEXT)
export const colorPairs: ColorPair[] = [
  { bg: "bg-[#ECFDF3]", text: "text-[#027A48]" },
  { bg: "bg-[#FFF1F3]", text: "text-[#C01048]" },
  { bg: "bg-[#FDF2FA]", text: "text-[#C11574]" },
  { bg: "bg-[#F9F5FF]", text: "text-[#6941C6]" },
  { bg: "bg-[#F8F9FC]", text: "text-[#363F72]" },
  { bg: "bg-[#EEF4FF]", text: "text-[#3538CD]" },
  { bg: "bg-[#F0F9FF]", text: "text-[#026AA2]" },
];

// GETTING A RANDOM COLOR PAIR
export const getRandomColorPair = (): ColorPair => {
  const index = Math.floor(Math.random() * colorPairs.length);
  return colorPairs[index];
};
