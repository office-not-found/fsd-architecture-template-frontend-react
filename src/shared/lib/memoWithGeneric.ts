import { memo } from "react";

export const memoWithGeneric: <C>(component: C) => C = memo;
