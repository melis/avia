const filter = (arr, transfer) => {
  let newArr = [];
  const { all, none, one, two, three } = transfer;
  if (all || (!none && !one && !two && !three)) {
    return arr;
  } else {
    if (none) {
      newArr = [
        ...newArr,
        ...arr.filter((el) => {
          if (el.segments[0].stops.length < 1 && el.segments[1].stops.length < 1) {
            return true;
          }
          return false;
        }),
      ];
    }
    if (one) {
      newArr = [
        ...newArr,
        ...arr.filter((el) => {
          if (
            el.segments[0].stops.length <= 1 &&
            el.segments[1].stops.length <= 1 &&
            (el.segments[0].stops.length === 1 || el.segments[1].stops.length === 1)
          ) {
            return true;
          }
          return false;
        }),
      ];
    }
    if (two) {
      newArr = [
        ...newArr,
        ...arr.filter((el) => {
          if (
            el.segments[0].stops.length <= 2 &&
            el.segments[1].stops.length <= 2 &&
            (el.segments[0].stops.length === 2 || el.segments[1].stops.length === 2)
          ) {
            return true;
          }
          return false;
        }),
      ];
    }
    if (three) {
      newArr = [
        ...newArr,
        ...arr.filter((el) => {
          if (
            el.segments[0].stops.length <= 3 &&
            el.segments[1].stops.length <= 3 &&
            (el.segments[0].stops.length === 3 || el.segments[1].stops.length === 3)
          ) {
            return true;
          }
          return false;
        }),
      ];
    }
  }
  return newArr;
};

export default filter;
