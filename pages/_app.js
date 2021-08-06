import { useEffect, useReducer } from "react";
import "tailwindcss/tailwind.css";
import { SlotContext } from "../utils/context";
import { getSlots, initSlot } from "../utils/slots";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "UPDATE":
      return {
        slots: state.slots.map((elem) => {
          if (elem.id === action.payload.id) {
            return action.payload;
          } else return elem;
        }),
      };
    case "CLEAR":
      return {
        slots: initSlot,
      };
    default:
      return state;
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {
    slots: getSlots(router),
  });

  useEffect(() => {
    localStorage.setItem("slots", JSON.stringify(state.slots));
  }, [router.asPath]);

  if (router.isReady) {
    return (
      <Layout>
        <SlotContext.Provider value={{ state, dispatch }}>
          <Component {...pageProps} />
        </SlotContext.Provider>
      </Layout>
    );
  } else {
    return <p>Loading...</p>;
  }
}
export default MyApp;
