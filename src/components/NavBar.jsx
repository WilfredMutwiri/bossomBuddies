
"use client";

import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar fluid rounded className="bg-gray-200">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="text-pink-700 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bossom Buddies</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/Login">
        <Button gradientDuoTone="purpleToPink" outline>Login</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Projects</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
