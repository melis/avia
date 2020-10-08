const time = (date, duration) => {
  return [
    `${new Date(date).getHours()}:${new Date(date).getMinutes()}`,
    `${new Date(Date.parse(date) + duration * 60000).getHours()}:${new Date(
      Date.parse(date) + duration * 60000,
    ).getMinutes()}`,
  ];
};

export default time;
