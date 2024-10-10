'use client'
import {SearchIcon} from "./SearchIcon.js";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,Input, Link, Button} from "@nextui-org/react";
import {Logo} from "./Logo.js";

export default function App() {
  return (
    <Navbar className="bg-red-300 shadow-2xl static shadow-red-300/10">
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link className="text-white text-lg" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-lg" href="/blog">
            Blogs
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-red-400 bg-white",
          }}
          placeholder="Search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
          className="text-white" 
        />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}