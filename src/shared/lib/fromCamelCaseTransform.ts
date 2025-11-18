export const fromCamelCaseTransform = (text: string) =>
    text.replace(/^\w|[A-Z]/g, (w) =>
        w === w.toLowerCase() ? w.toUpperCase() : ` ${w.toLowerCase()}`
    );
