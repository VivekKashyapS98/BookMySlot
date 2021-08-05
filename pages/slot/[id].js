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

    if (item?.booked) {
      return (
        <div className="flex flex-col justify-center items-center">
          <div className="flex">
            <h2 className="text-lg md:text-xl text-semibold">Name:</h2>
            <h2 className="text-lg md:text-xl">
              {" " + item.firstName + " " + item.lastName}
            </h2>
          </div>
          <div className="flex">
            <h2 className="text-lg md:text-xl text-semibold">Phone No:</h2>
            <h2 className="text-lg md:text-xl">{" " + item.phNo}</h2>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <h3 className="text-2xl text-center font-semibold m-2 md:text-3xl md:m-5">
            Book a Slot
          </h3>
          <EditSlot id={id} router={router} />
        </>
      );
    }
  } else {
    return <h2>Loading...</h2>;
  }
}
