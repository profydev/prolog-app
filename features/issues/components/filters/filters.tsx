import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { IssueLevel, IssueStatus } from "@api/issues.types";
import { useFilters } from "../../hooks/use-filters";
import * as S from "./filters.styled";

const statusOptions = [
  { value: undefined, label: "--None--" },
  { value: IssueStatus.open, label: "Unresolved" },
  { value: IssueStatus.resolved, label: "Resolved" },
];

const levelOptions = [
  { value: undefined, label: "--None--" },
  { value: IssueLevel.error, label: "Error" },
  { value: IssueLevel.warning, label: "Warning" },
  { value: IssueLevel.info, label: "Info" },
];

export function Filters() {
  const { handleFilters, filters } = useFilters();

  const debouncedHandleFilters = useDebouncedCallback(handleFilters, 300);
  const [inputValue, setInputValue] = useState(filters.project || "");

  const handleChange = (project: string) => {
    setInputValue(project);
    debouncedHandleFilters({ project: project.toLowerCase() });
  };

  return (
    <S.Container>
      <S.Select
        placeholder="Status"
        value={filters.status}
        options={statusOptions}
        onChange={(status) => handleFilters({ status })}
      />

      <S.Select
        placeholder="Level"
        value={filters.level}
        options={levelOptions}
        onChange={(level) => handleFilters({ level })}
      />

      <S.Input
        handleChange={handleChange}
        value={inputValue}
        label="project name"
        placeholder="Project Name"
        iconSrc="/icons/search-icon.svg"
      />
    </S.Container>
  );
}
