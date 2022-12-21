import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { capitalize } from "lodash";
import { Option } from "@features/ui";
import { IssueFilters, IssueLevel, IssueStatus } from "@api/issues.types";
import { useFilters } from "../../hooks/use-filters";
import * as S from "./filters.styled";

function getStatusDefaultValue(filters: IssueFilters) {
  if (!filters.status) {
    return "Status";
  }
  if (filters.status === IssueStatus.open) {
    return "Unresolved";
  }
  return "Resolved";
}

function getLevelDefaultValue(filters: IssueFilters) {
  if (!filters.level) {
    return "Level";
  }
  return capitalize(filters.level);
}

export function Filters() {
  const { handleFilters, filters } = useFilters();

  const debouncedHandleFilters = useDebouncedCallback(handleFilters, 300);
  const [inputValue, setInputValue] = useState(filters.project || "");

  const handleChange = (project: string) => {
    setInputValue(project);
    debouncedHandleFilters({ project: project.toLowerCase() });
  };

  const handleLevel = (level?: string) => {
    if (level) {
      level = level.toLowerCase();
    }
    handleFilters({ level: level as IssueLevel });
  };

  const handleStatus = (status?: string) => {
    if (status === "Unresolved") {
      status = "open";
    }
    if (status) {
      status = status.toLowerCase();
    }
    handleFilters({ status: status as IssueStatus });
  };

  return (
    <S.Container>
      <S.Select
        placeholder="Status"
        defaultValue={getStatusDefaultValue(filters)}
      >
        <Option value={undefined} handleCallback={handleStatus}>
          --None--
        </Option>
        <Option value="Unresolved" handleCallback={handleStatus}>
          Unresolved
        </Option>
        <Option value="Resolved" handleCallback={handleStatus}>
          Resolved
        </Option>
      </S.Select>

      <S.Select
        placeholder="Level"
        defaultValue={getLevelDefaultValue(filters)}
      >
        <Option value={undefined} handleCallback={handleLevel}>
          --None--
        </Option>
        <Option value="Error" handleCallback={handleLevel}>
          Error
        </Option>
        <Option value="Warning" handleCallback={handleLevel}>
          Warning
        </Option>
        <Option value="Info" handleCallback={handleLevel}>
          Info
        </Option>
      </S.Select>

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
