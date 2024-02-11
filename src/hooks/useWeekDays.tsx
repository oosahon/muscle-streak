import { useEffect, useState } from "react";
import { monthsOfYear } from "../dictionary/date";

const getFirstDayOfTheWeek = (startDate: Date): Date => {
  const today = new Date(startDate);

  const currentDayOfTheWeek = today.getDay();
  const currentDate = today.getDate();

  const firstDayOfTheWeek = new Date(today);
  firstDayOfTheWeek.setDate(currentDate + (0 - currentDayOfTheWeek));

  return firstDayOfTheWeek;
};

export const useWeekDays = () => {
  const [days, setDays] = useState<Date[]>([]);
  const [firstDayOfTheWeek, setFirstDayOfTheWeek] = useState<Date>(
    getFirstDayOfTheWeek(new Date())
  );

  useEffect(() => {
    const dates: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(firstDayOfTheWeek);
      nextDate.setDate(firstDayOfTheWeek.getDate() + i);
      dates.push(nextDate);
    }
    setDays(dates);
  }, [firstDayOfTheWeek, setDays]);

  const getPrevious = () => {
    const startDate = new Date(firstDayOfTheWeek);
    const currentDate = firstDayOfTheWeek.getDate();

    startDate.setDate(currentDate - 7);

    const newFirstDayOfTheWeek = getFirstDayOfTheWeek(startDate);

    setFirstDayOfTheWeek(newFirstDayOfTheWeek);
  };

  const getNext = () => {
    const startDate = new Date(firstDayOfTheWeek);
    const currentDate = firstDayOfTheWeek.getDate();

    startDate.setDate(currentDate + 7);

    const newFirstDayOfTheWeek = getFirstDayOfTheWeek(startDate);

    setFirstDayOfTheWeek(newFirstDayOfTheWeek);
  };

  return {
    days,
    getPrevious,
    getNext,
  };
};
