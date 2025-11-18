import { NavLink as NavLinkFromLibUi } from "@mantine/core";
import type { ComponentProps } from "react";
import { Link } from "react-router";

interface NavLinkProps
    extends Omit<ComponentProps<typeof NavLinkFromLibUi<typeof Link>>, "to"> {
    to?: string;
}

export const NavLink = ({ to = "", ...props }: NavLinkProps) => (
    <NavLinkFromLibUi component={Link} to={to} {...props} />
);
