import Link from "next/link";

const menuItems = [
  { text: "Projects", icon: null, href: "#" },
  { text: "Issues", icon: null, href: "#" },
  { text: "Alerts", icon: null, href: "#" },
  { text: "Users", icon: null, href: "#" },
  { text: "Settings", icon: null, href: "#" },
];

export function SidebarNavigation() {
  return (
    <nav>
      <ul>
        {menuItems.map(({ text, href }, index) => (
          <li key={index}>
            <Link href={href}>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        <li>Support</li>
        <li>Collapse</li>
      </ul>
    </nav>
  );
}
