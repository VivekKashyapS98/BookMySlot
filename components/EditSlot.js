import { useContext, useState } from "react";
import { SlotContext } from "../utils/context";

export default function EditSlot(props) {
  const { state, dispatch } = useContext(SlotContext);
  const [slot, setSlot] = useState(state.slots[props.id]);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setSlot((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      slot.firstName !== "" &&
      slot.lastName !== "" &&
      slot.phNo !== "" &&
      isNumeric(slot.phNo)
    ) {
      dispatch({ type: "UPDATE", payload: { ...slot, booked: true } });
      props.router.push("/");
    } else {
      setError(true);
    }
  };
  return (
    <div className="flex justify-center">
      <form
        className="max-w-md flex flex-col justify-center p-2 rounded-full"
        onSubmit={handleSubmit}
      >
        <input
          className="m-2 p-2 rounded-lg md:m-4 h-11 w-72 outline-none text-lg transition-gpu duration-200 bg-gray-100 focus:ring-2 md:focus:ring-4  focus:ring-gray-200"
          placeholder="First Name"
          type="text"
          name="firstName"
          value={slot?.firstName}
          onChange={handleChange}
        />
        <input
          className="m-2 p-2 rounded-lg md:m-4 h-11 w-72 outline-none text-lg transition-gpu duration-200 bg-gray-100 focus:ring-2 md:focus:ring-4 focus:ring-gray-200"
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={slot?.lastName}
          onChange={handleChange}
        />
        <input
          className="m-2 p-2 rounded-lg md:m-4 h-11 w-72 outline-none text-lg transition-gpu duration-200 bg-gray-100 focus:ring-2 md:focus:ring-4 focus:ring-gray-200"
          placeholder="Phone No"
          type="text"
          name="phNo"
          value={slot?.phNo}
          onChange={handleChange}
        />
        {error && (
          <p className="m-2 p-2 bg-red-400 rounded-lg text-white font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {slot.firstName === "" || slot.lastName === "" || slot.phNo === ""
              ? "Fields can't be empty!"
              : "Phone No. must be numeric!"}
          </p>
        )}
        <input
          className="m-2 p-2 py-2 px-4 bg-blue-600 text-white text-base md:text-lg font-medium text-center shadow-lg rounded-md md:rounded-lg transition-gpu duration-100 ease-in cursor-pointer hover:bg-blue-500  hover:shadow-xl active:bg-blue-700 active:shadow-md active:text-white"
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
