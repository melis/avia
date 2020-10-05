import React from 'react';
import Ticket from '../Ticket/Ticket';

export const ticketsCreator = (arr) => {
  let i = 0;
  return arr.map((el) => {
    return <Ticket key={i++} ticket={el} />;
  });
};
