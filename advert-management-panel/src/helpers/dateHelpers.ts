const changeISODateToReadable = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
};

export { changeISODateToReadable };