import React, { useState, useCallback, useContext } from "react";
import { useWindowSize } from "react-use";
import { Select, Option, Input, NavigationContext } from "@features/ui";
import { useFilters } from "../../hooks/use-filters";
import { IssueFilters, IssueLevel, IssueStatus } from "@api/issues.types";
import { useProjects } from "@features/projects";
import * as S from "./filters.styled";
import { capitalize } from "lodash";

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
  const { data: projects } = useProjects();

  const [inputValue, setInputValue] = useState(filters.project || "");
  const projectNames = projects?.map((project) => project.name.toLowerCase());

  const { width } = useWindowSize();
  const isMobileScreen = width <= 1023;
  const { isMobileMenuOpen } = useContext(NavigationContext);

  const handleChange = (input: string) => {
    setInputValue(input);

    if (inputValue?.length < 2) {
      handleProjectName(undefined);
      return;
    }

    const name = projectNames?.find((name) =>
      name?.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (name) {
      handleProjectName(name);
    }
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

  const handleProjectName = useCallback(
    (projectName?: string) =>
      handleFilters({ project: projectName?.toLowerCase() }),
    [handleFilters]
  );

  return (
    <S.Container>
      <Select
        placeholder="Status"
        defaultValue={getStatusDefaultValue(filters)}
        width={isMobileScreen ? "97%" : "8rem"}
        style={{
          ...(isMobileMenuOpen && {
            opacity: 0,
          }),
        }}
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
      </Select>

      <Select
        placeholder="Level"
        defaultValue={getLevelDefaultValue(filters)}
        width={isMobileScreen ? "97%" : "8rem"}
        style={{
          ...(isMobileMenuOpen && {
            opacity: 0,
          }),
        }}
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
      </Select>

      <Input
        handleChange={handleChange}
        value={inputValue}
        label="project name"
        placeholder="Project Name"
        iconSrc="/icons/search-icon.svg"
        style={{
          ...(isMobileScreen && { width: "94%", marginRight: "3rem" }),
          ...(isMobileMenuOpen && {
            opacity: 0,
          }),
        }}
      />
    </S.Container>
  );
}
