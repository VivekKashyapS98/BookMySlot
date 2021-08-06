import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import EditSlot from "../../components/EditSlot";
import { SlotContext } from "../../utils/context";

export default function ID() {
  const router = useRouter();

  if (router.isReady) {
    const { id } = router.query;
    const { state } = useContext(SlotContext);
    const item = state?.slots[id];

    return (
      <div className="m-2 md:m-4 flex flex-col justify-center items-center">
        <div className="bg-gray-100 p-2 md:p-4 rounded-lg">
          <div className="flex">
            <h2 className="text-lg md:text-xl font-semibold">Name:</h2>
            <h2 className="ml-2 text-lg md:text-xl">
              {item.firstName + " " + item.lastName}
            </h2>
          </div>
          <div className="flex">
            <h2 className="text-lg md:text-xl font-semibold">Phone No:</h2>
            <h2 className="ml-2 text-lg md:text-xl">{item.phNo}</h2>
          </div>
        </div>
        <Link href={`/edit/${id}`} passHref>
          <button className="m-2 p-2 py-2 px-4 bg-blue-600 text-white text-base md:text-lg font-medium text-center shadow-lg rounded-md md:rounded-lg transition duration-100 ease-in cursor-pointer hover:bg-blue-500  hover:shadow-xl active:bg-blue-700 active:shadow-md active:text-white">
            Edit
          </button>
        </Link>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
