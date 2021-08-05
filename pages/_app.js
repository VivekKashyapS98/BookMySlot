import { useReducer } from "react";
import "tailwindcss/tailwind.css";
import { SlotContext } from "../utils/context";
import { slots } from "../utils/slots";
import Layout from "../components/Layout";

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
    default:
      return state;
  }
}

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, {
    slots: slots,
  });

  return (
    <Layout>
      <SlotContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </SlotContext.Provider>
    </Layout>
  );
}
export default MyApp;
