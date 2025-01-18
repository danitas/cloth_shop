// Create an Intl.NumberFormat instance for whole numbers
export const numberFormatter = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 0, // No fractions
});
