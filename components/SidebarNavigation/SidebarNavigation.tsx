import styled from "styled-components";
import { MenuItem } from "./MenuItem";

const menuItems = [
  { text: "Projects", iconSrc: "/icons/projects.svg", href: "#" },
  { text: "Issues", iconSrc: "/icons/issues.svg", href: "#" },
  { text: "Alerts", iconSrc: "/icons/alert.svg", href: "#" },
  { text: "Users", iconSrc: "/icons/users.svg", href: "#" },
  { text: "Settings", iconSrc: "/icons/settings.svg", href: "#" },
];

const Nav = styled.nav`
  width: 280px;
  height: 100vh;
  background: #101828;
`;

const List = styled.ul`
  list-style: none;
  padding: 0 16px;
`;

export function SidebarNavigation() {
  return (
    <Nav>
      <List>
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))}
      </List>

      <List>
        <li>Support</li>
        <li>Collapse</li>
      </List>
    </Nav>
  );
}
