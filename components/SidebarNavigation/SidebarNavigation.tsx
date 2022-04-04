import styled from "styled-components";
import { MenuItemButton } from "./MenuItemButton";
import { MenuItemLink } from "./MenuItemLink";

const menuItems = [
  { text: "Projects", iconSrc: "/icons/projects.svg", href: "#" },
  { text: "Issues", iconSrc: "/icons/issues.svg", href: "#" },
  { text: "Alerts", iconSrc: "/icons/alert.svg", href: "#" },
  { text: "Users", iconSrc: "/icons/users.svg", href: "#" },
  { text: "Settings", iconSrc: "/icons/settings.svg", href: "#" },
];

const Nav = styled.nav`
  width: 280px;
  height: calc(100vh - 2 * 32px);
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  background: #101828;
`;

const Logo = styled.img`
  width: 118px;
  margin: 0 12px 24px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkList = styled(List)`
  flex: 1;
`;

export function SidebarNavigation() {
  return (
    <Nav>
      <Logo src="/icons/logo-large.svg" />

      <LinkList>
        {menuItems.map((menuItem, index) => (
          <MenuItemLink key={index} {...menuItem} />
        ))}
      </LinkList>

      <List>
        <MenuItemButton
          text="Support"
          iconSrc="/icons/support.svg"
          onClick={() => alert("Support")}
        />
        <MenuItemButton
          text="Collapse"
          iconSrc="/icons/arrow-left.svg"
          onClick={() => alert("Collapse")}
        />
      </List>
    </Nav>
  );
}
