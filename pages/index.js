import Head from "next/head";
import { useContext } from "react";
import Card from "../components/Card";
import { SlotContext } from "../utils/context";

export default function Home() {
  const { state } = useContext(SlotContext);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {state.slots.map((elem, ind) => (
        <Card key={ind} item={elem}>
          <h3 className="text-lg font-semibold md:text-2xl">{elem.time}</h3>
        </Card>
      ))}
    </div>
  );
}
