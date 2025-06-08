export const convertTime = (time: Date | string | number) => {
  const date = new Date(time);

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};