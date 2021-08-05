import { useContext, useState } from "react";
import { SlotContext } from "../utils/context";

export default function EditSlot(props) {
  const { state, dispatch } = useContext(SlotContext);
  const [slot, setSlot] = useState(state.slots[props.id]);

  const handleChange = (e) => {
    setSlot((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (slot.firstName !== "" && slot.lastName !== "" && slot.phNo !== "") {
      dispatch({ type: "UPDATE", payload: slot });
    }
  };
  return (
    <form
      className="flex flex-col justify-center p-2 rounded-full"
      onSubmit={handleSubmit}
    >
      <input
        className="m-2 md:m-4 h-11 w-72 outline-none text-lg bg-gray-200"
        placeholder="First Name"
        type="text"
        name="firstName"
        value={slot.firstName}
        onChange={handleChange}
      />
      <input
        className="m-2 md:m-4 h-11 w-72 outline-none text-lg bg-gray-200"
        placeholder="Last Name"
        type="text"
        name="lastName"
        value={slot.lastName}
        onChange={handleChange}
      />
      <input
        className="m-2 md:m-4 h-11 w-72 outline-none text-lg bg-gray-200"
        placeholder="Phone No"
        type="text"
        name="phNo"
        value={slot.phNo}
        onChange={handleChange}
      />
      <div
        className="m-2 md:m-4 p-2 rounded-full transition-gpu duration-200 hover:bg-gray-800"
        onClick={handleSubmit}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </form>
  );
}
