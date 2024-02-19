'use client';

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Divider, menu } from "@nextui-org/react";
import { AcmeLogo } from "./acme-logo.jsx";
import UserDropdown from "./user-dropdown";
import { ThemeSwitch } from "./theme-switch";
import SignUpButtons from "./sign-up-buttons";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} classNames={{
      item: [
        "flex",
        "relative",
        "h-full",
        "items-center",
        "data-[active=true]:after:content-['']",
        "data-[active=true]:after:absolute",
        "data-[active=true]:after:bottom-0",
        "data-[active=true]:after:left-0",
        "data-[active=true]:after:right-0",
        "data-[active=true]:after:h-[2px]",
        "data-[active=true]:after:rounded-[2px]",
        "data-[active=true]:after:bg-[#171717]",
        "data-[active=true]:dark:after:bg-white",

      ],
    }}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <ThemeSwitch />

        {loggedIn
          ? <UserDropdown />
          : <SignUpButtons />}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <div key={`${item}-${index}`}>
            <NavbarMenuItem>
              <Link
                className="w-full mb-2"
                color="foreground"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
            {menuItems.length - 1 !== index && <Divider />}
          </div>

        )
        )}
        {<SignUpButtons isMobile loggedIn={loggedIn}/>}

      </NavbarMenu>

    </Navbar>
  );
}
