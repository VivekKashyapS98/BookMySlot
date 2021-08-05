export function getSlots(router) {
  let slots = [
    {
      id: 0,
      time: "9am",
      firstName: "",
      lastName: "",
      phNo: "",
      booked: false,
    },
    {
      id: 1,
      time: "10am",
      firstName: "",
      lastName: "",
      phNo: "",
      booked: false,
    },
    {
      id: 2,
      time: "11am",
      firstName: "",
      lastName: "",
      phNo: "",
      booked: false,
    },
    {
      id: 3,
      time: "12pm",
      firstName: "",
      lastName: "",
      phNo: "",
      booked: false,
    },
    {
      id: 4,
      time: "1pm",
      firstName: "",
      lastName: "",
      phNo: "",
      booked: false,
    },
    {
      id: 5,
      time: "2pm",
      firstName: "",
      lastName: "",
      phNo: "",
      booked: false,
    },
    {
      id: 6,
      time: "3pm",
      firstName: "",
      lastName: "",
      phNo: "",
      booked: false,
    },
    {
      id: 7,
      time: "4pm",
      firstName: "",
      lastName: "",
      phNo: "",
      booked: false,
    },
    {
      id: 8,
      time: "5pm",
      firstName: "",
      lastName: "",
      phNo: "",
      booked: false,
    },
  ];

  if (router.isReady) {
    if (localStorage.getItem("slots")) {
      slots = JSON.parse(localStorage.getItem("slots"));
    }
  }
  return slots;
}

export const initSlot = [
  {
    id: 0,
    time: "9am",
    firstName: "",
    lastName: "",
    phNo: "",
    booked: false,
  },
  {
    id: 1,
    time: "10am",
    firstName: "",
    lastName: "",
    phNo: "",
    booked: false,
  },
  {
    id: 2,
    time: "11am",
    firstName: "",
    lastName: "",
    phNo: "",
    booked: false,
  },
  {
    id: 3,
    time: "12pm",
    firstName: "",
    lastName: "",
    phNo: "",
    booked: false,
  },
  {
    id: 4,
    time: "1pm",
    firstName: "",
    lastName: "",
    phNo: "",
    booked: false,
  },
  {
    id: 5,
    time: "2pm",
    firstName: "",
    lastName: "",
    phNo: "",
    booked: false,
  },
  {
    id: 6,
    time: "3pm",
    firstName: "",
    lastName: "",
    phNo: "",
    booked: false,
  },
  {
    id: 7,
    time: "4pm",
    firstName: "",
    lastName: "",
    phNo: "",
    booked: false,
  },
  {
    id: 8,
    time: "5pm",
    firstName: "",
    lastName: "",
    phNo: "",
    booked: false,
  },
];
