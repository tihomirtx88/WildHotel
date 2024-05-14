import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // CABIN 001
  {
    created_at: fromToday(-20, true),
    startDate: fromToday(0),
    endDate: fromToday(7),
    cabinId: 1,
    guestId: 2,
    hasBreakfast: true,
    isPaid: false,
    numGuests: 1,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-33, true),
    startDate: fromToday(-23),
    endDate: fromToday(-13),
    cabinId: 1,
    guestId: 3,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 2,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-27, true),
    startDate: fromToday(12),
    endDate: fromToday(18),
    cabinId: 1,
    guestId: 4,
    hasBreakfast: false,
    isPaid: false,
    numGuests: 2,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },

  // CABIN 002
  {
    created_at: fromToday(-45, true),
    startDate: fromToday(-45),
    endDate: fromToday(-29),
    cabinId: 2,
    guestId: 5,
    hasBreakfast: false,
    isPaid: true,
    numGuests: 2,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(15),
    endDate: fromToday(18),
    cabinId: 2,
    guestId: 6,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 2,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-5, true),
    startDate: fromToday(33),
    endDate: fromToday(48),
    cabinId: 2,
    guestId: 7,
    hasBreakfast: true,
    isPaid: false,
    numGuests: 2,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },

  // CABIN 003
  {
    created_at: fromToday(-65, true),
    startDate: fromToday(-25),
    endDate: fromToday(-20),
    cabinId: 3,
    guestId: 8,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 4,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(-2),
    endDate: fromToday(0),
    cabinId: 3,
    guestId: 9,
    hasBreakfast: false,
    isPaid: true,
    numGuests: 3,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-14, true),
    startDate: fromToday(-14),
    endDate: fromToday(-11),
    cabinId: 3,
    guestId: 10,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 4,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },

  // CABIN 004
  {
    created_at: fromToday(-30, true),
    startDate: fromToday(-4),
    endDate: fromToday(8),
    cabinId: 4,
    guestId: 11,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 4,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-1, true),
    startDate: fromToday(12),
    endDate: fromToday(17),
    cabinId: 4,
    guestId: 12,
    hasBreakfast: true,
    isPaid: false,
    numGuests: 4,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-3, true),
    startDate: fromToday(18),
    endDate: fromToday(19),
    cabinId: 4,
    guestId: 13,
    hasBreakfast: false,
    isPaid: true,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },

  // CABIN 005
  {
    created_at: fromToday(0, true),
    startDate: fromToday(14),
    endDate: fromToday(21),
    cabinId: 5,
    guestId: 14,
    hasBreakfast: true,
 
    isPaid: false,
    numGuests: 5,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-6, true),
    startDate: fromToday(-6),
    endDate: fromToday(-4),
    cabinId: 5,
    guestId: 15,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 4,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-4, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    cabinId: 5,
    guestId: 16,
    hasBreakfast: false,
    isPaid: true,
    numGuests: 6,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },

  // CABIN 006
  {
    created_at: fromToday(-3, true),
    startDate: fromToday(0),
    endDate: fromToday(11),
    cabinId: 6,
    guestId: 17,
    hasBreakfast: false,

    isPaid: true,
    numGuests: 6,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-16, true),
    startDate: fromToday(-16),
    endDate: fromToday(-9),
    cabinId: 6,
    guestId: 18,
    hasBreakfast: true,

    isPaid: true,
    numGuests: 4,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-18, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    cabinId: 6,
    guestId: 19,
    hasBreakfast: true,

    isPaid: true,
    numGuests: 6,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },

  // CABIN 007
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(17),
    endDate: fromToday(23),
    cabinId: 7,
    guestId: 20,
    hasBreakfast: false,
    isPaid: false,
    numGuests: 8,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-7, true),
    startDate: fromToday(40),
    endDate: fromToday(50),
    cabinId: 7,
    guestId: 21,
    hasBreakfast: true,

    isPaid: true,
    numGuests: 7,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-55, true),
    startDate: fromToday(32),
    endDate: fromToday(37),
    cabinId: 7,
    guestId: 22,
    hasBreakfast: true,

    isPaid: true,
    numGuests: 6,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },

  // CABIN 008
  {
    created_at: fromToday(-8, true),
    startDate: fromToday(-5),
    endDate: fromToday(0),
    cabinId: 8,
    guestId: 1,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 9,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(0, true),
    startDate: fromToday(0),
    endDate: fromToday(5),
    cabinId: 8,
    guestId: 23,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 10,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
  {
    created_at: fromToday(-10, true),
    startDate: fromToday(10),
    endDate: fromToday(13),
    cabinId: 8,
    guestId: 24,
    hasBreakfast: false,
    isPaid: true,
    numGuests: 7,
    numNight:3,
    cabinPrice: 300,
    extrasPrice: 200,
    totalPrice:1000,
    observation: 'Amazing travel and room'
  },
];
