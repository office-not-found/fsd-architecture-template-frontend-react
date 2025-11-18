const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
};

export const formatDate = (
    date: string | Date,
    locale: Intl.LocalesArgument = "ru-RU",
    options = defaultOptions
) => {
    try {
        const formattedDate = Intl.DateTimeFormat(locale, {
            ...defaultOptions,
            ...options
        }).format(new Date(date));

        return formattedDate;
    } catch (error) {
        console.error(error);
        return "Invalid date";
    }
};

export const fullDateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
};
export const yearMonthsOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric"
};

export const getFullDate = (date: string | Date | undefined) => {
    if (!date) return "-";

    return formatDate(date, "ru-RU", fullDateOptions).replace(",", "");
};

export const FORMAT_YEAR_MONTH_DAY_ISO = "YYYY-MM-DD";
export const FORMAT_DATE_DISPLAY = "YYYY.MM.DD";
