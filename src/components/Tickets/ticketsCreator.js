import React from 'react';
import Ticket from '../Ticket/Ticket';
import filter from './filter';

export const ticketsCreator = (arr, kind, showCount, transfer) => {
  let i = 0;
  arr = filter(arr, transfer);
  if (kind === 'INEXPENSIVE') {
    arr.sort(function (a, b) {
      return a.price - b.price;
    });
  } else {
    arr.sort((a, b) => {
      // if (a.segments[0].duration === b.segments[0].duration) {
      //   return a.segments[1].duration - b.segments[1].duration;
      // }
      return (
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
      );
    });
  }

  arr.length = showCount;
  return arr.map((el) => {
    return <Ticket key={i++} ticket={el} />;
  });
};
