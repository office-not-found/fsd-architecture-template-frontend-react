import type { ComboboxData } from "@mantine/core";
import type { PartialNonSortParams } from "@/shared/model";

export type Filter =
    | {
          type: "select";
          label: string;
          paramsKey: keyof PartialNonSortParams;
          options: ComboboxData;
          placeholder?: string;
      }
    | {
          type: "multiselect";
          label: string;
          paramsKey: keyof PartialNonSortParams;
          options: ComboboxData;
          placeholder?: string;
      }
    | {
          type: "input";
          label: string;
          paramsKey: keyof PartialNonSortParams;
          placeholder?: string;
      };
