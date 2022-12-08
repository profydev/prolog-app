import { useContext } from "react";
import { FiltersContext } from "../context/filters-context";

export const useFilters = () => useContext(FiltersContext);
