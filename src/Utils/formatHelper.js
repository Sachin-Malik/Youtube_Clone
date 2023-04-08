export const formatNumber = (num) => {
    if(isNaN(num)) return num;
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixIndex = Math.floor(Math.log10(num) / 3);
    const shortNum = (num / Math.pow(1000, suffixIndex)).toPrecision(3);
    return shortNum + suffixes[suffixIndex];
  }