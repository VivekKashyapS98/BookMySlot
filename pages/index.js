import Head from "next/head";
import { useContext } from "react";
import Card from "../components/Card";
import { SlotContext } from "../utils/context";

export default function Home() {
  const { state, dispatch } = useContext(SlotContext);

  const clearSlots = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        <button
          className="m-2 p-2 py-2 px-4 bg-blue-600 text-white text-base md:text-lg font-medium text-center shadow-lg rounded-md md:rounded-lg transition duration-100 ease-in cursor-pointer hover:bg-blue-500  hover:shadow-xl active:bg-blue-700 active:shadow-md active:text-white"
          onClick={clearSlots}
        >
          Clear the slots
        </button>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {state.slots.map((elem, ind) => (
          <Card key={ind} item={elem}>
            <h3 className="text-lg font-semibold md:text-2xl">{elem.time}</h3>
          </Card>
        ))}
      </div>
    </>
  );
}
