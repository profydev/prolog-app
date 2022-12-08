import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";
import { useRouter } from "next/router";
import { useWindowSize } from "react-use";
import { Select, Option, Input, NavigationContext } from "@features/ui";
import { useFilters } from "../../hooks/use-filters";
import { IssueLevel, IssueStatus } from "@api/issues.types";
import { useProjects } from "@features/projects";
import * as S from "./filters.styled";

export function Filters() {
  const { handleFilters, filters } = useFilters();
  const { data: projects } = useProjects();
  const router = useRouter();
  const routerQueryProjectName =
    (router.query.projectName as string)?.toLowerCase() || undefined;
  const [inputValue, setInputValue] = useState<string>("");
  const projectNames = projects?.map((project) => project.name.toLowerCase());
  const isFirst = useRef(true);
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

  useEffect(() => {
    const newObj: { [key: string]: string } = {
      ...filters,
    };

    Object.keys(newObj).forEach((key) => {
      if (newObj[key] === undefined) {
        delete newObj[key];
      }
    });

    const url = {
      pathname: router.pathname,
      query: {
        page: router.query.page || 1,
        ...newObj,
      },
    };

    if (routerQueryProjectName && isFirst) {
      handleProjectName(routerQueryProjectName);
      setInputValue(routerQueryProjectName || "");
      isFirst.current = false;
    }

    router.push(url, undefined, { shallow: false });
  }, [filters.level, filters.status, filters.project, router.query.page]);

  return (
    <S.Container>
      <Select
        placeholder="Status"
        defaultValue="Status"
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
        defaultValue="Level"
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
