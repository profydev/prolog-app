import React, {
  useState,
  useMemo,
  useCallback,
  createContext,
  ReactNode,
} from "react";
import { IssueFilters } from "@api/issues.types";

export const FiltersContext = createContext<{
  filters: IssueFilters;
  handleFilters: (filter: IssueFilters) => unknown;
}>({
  filters: { status: undefined, level: undefined, project: undefined },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  handleFilters: (_filter: IssueFilters) => {},
});

type FiltersProviderProps = {
  children: ReactNode | ReactNode[];
};

export function FiltersProvider({ children }: FiltersProviderProps) {
  const [filters, setFilters] = useState<IssueFilters>({
    status: undefined,
    level: undefined,
    project: undefined,
  });

  const handleFilters = useCallback(
    (filter: any) =>
      setFilters((prevFilters) => ({ ...prevFilters, ...filter })),
    []
  );

  const memoizedValue = useMemo(
    () => ({ filters, handleFilters }),
    [filters, handleFilters]
  );

  return (
    <FiltersContext.Provider value={memoizedValue}>
      {children}
    </FiltersContext.Provider>
  );
}
