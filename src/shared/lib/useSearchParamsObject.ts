import { useMemo } from "react";
import { useSearchParams } from "react-router";
import type { PartialURLParams } from "../model";

type ExtractedParams<T extends readonly (keyof PartialURLParams)[] | undefined> =
    T extends readonly (keyof PartialURLParams)[]
        ? { [K in T[number]]: PartialURLParams[K] }
        : PartialURLParams;

export const useSearchParamsObject = <
    T extends readonly (keyof PartialURLParams)[] | undefined = undefined
>(
    extractParams?: T
) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const parsedParams = useMemo(() => {
        const result: Partial<Record<keyof PartialURLParams, any>> = {};

        searchParams.forEach((value, key) => {
            const typedKey = key as keyof PartialURLParams;

            if (extractParams && !extractParams.includes(typedKey)) return;

            if (result[typedKey] === undefined) {
                result[typedKey] = value;
            } else if (Array.isArray(result[typedKey])) {
                (result[typedKey] as string[]).push(value);
            } else {
                result[typedKey] = [result[typedKey] as string, value];
            }
        });

        return result as ExtractedParams<T>;
    }, [searchParams, extractParams]);

    const setSearchParamsObject = (newParams: PartialURLParams) => {
        const updated = new URLSearchParams(searchParams);

        Object.entries(newParams).forEach(([key, value]) => {
            updated.delete(key);

            if (Array.isArray(value)) {
                value.forEach((item) => updated.append(key, item));
            } else if (value !== undefined) {
                updated.set(key, value.toString());
            }
        });

        setSearchParams(updated);
    };

    return {
        params: parsedParams,
        setSearchParamsObject
    };
};
