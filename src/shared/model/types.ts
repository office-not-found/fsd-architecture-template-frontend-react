export interface IMeta {
    currentPage: number;
    totalPages: number;
}

// It transforms enum only to string, not working for numbers
export type GetTypeOfValuesFromEnum<T extends string> = `${T}`;

export type TErrorResponse = { error: string; message: string; statusCode: number };

export type SortDirection = "asc" | "desc" | undefined;

export type URLSortParamsKey = "id" | "createdAt" | "updatedAt";

type SortParams = {
    [K in URLSortParamsKey]: SortDirection;
};

export type URLParams = {
    isBlocked: string;
    page: string;
    search: string;
    roleName: string;
    id: string;
    userName: string;
} & SortParams;

export type PartialURLParams = Partial<URLParams>;

export type NonSortParams = Omit<URLParams, URLSortParamsKey>;

export type PartialNonSortParams = Partial<NonSortParams>;

export type TableColumn<T> =
    | {
          type: "raw";
          key: string;
          label: string;
          sortKey?: URLSortParamsKey;
          isVisible: boolean;
      }
    | {
          type: "entry";
          keyInEntry: Extract<keyof T, string>;
          label: string;
          sortKey?: URLSortParamsKey;
          isVisible: boolean;
      };
