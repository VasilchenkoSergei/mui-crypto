export const formatNumber = (num: number): string => {
  const formatted = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 5,
    maximumFractionDigits: 5,
    useGrouping: true,
  }).format(num);

  return formatted.replace(',', '.');
};
