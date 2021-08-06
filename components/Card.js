import { useRouter } from "next/router";

export default function Card({ children, item }) {
  const router = useRouter();

  const bgColor = item.booked ? "bg-red-400" : "bg-gray-100";
  const hoverColor = item.booked ? "hover:bg-red-500" : "hover:bg-gray-200";
  const textColor = item.booked ? "text-white" : "";

  const handleClick = () => {
    if (item?.booked) {
      router.push(`/slot/${item.id}`);
    } else {
      router.push(`/edit/${item.id}`);
    }
  };

  return (
    <div
      className={`m-2 md:m-4 h-28 w-28 md:h-60 md:w-60 flex justify-center ${textColor} items-center ${bgColor} ring-2 ring-gray-200 rounded-xl transition-gpu duration-200 ${hoverColor}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
