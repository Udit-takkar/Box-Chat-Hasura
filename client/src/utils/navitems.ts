export interface NavigationProps {
  name: string;
  href: string;
}

const navigation: Array<NavigationProps> = [
  { name: "Invitations", href: "/invitations" },
  { name: "Rooms", href: "/rooms" },
  { name: "Create Room", href: "/" },
  { name: "Send Invite", href: "/invite" },
];

export default navigation;
