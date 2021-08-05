export default function Card({ children }) {
  return (
    <div className="m-2 md:m-4 h-28 w-28 md:h-60 md:w-60 flex justify-center items-center bg-gray-100 ring-2 ring-gray-200 rounded-xl transition-gpu duration-200 hover:bg-gray-200">
      {children}
    </div>
  );
}
