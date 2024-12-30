const changeISODateToReadable = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
};

const changeISODateTOyyyyMMdd = (date?: string) => {
  const dateObj = date ? new Date(date) : new Date();
  return dateObj.toISOString().split("T")[0];
};

export { changeISODateToReadable, changeISODateTOyyyyMMdd };
