export const countOccurrencesForString = (str: string, substring: string) =>
    str.split(substring).length - 1;
