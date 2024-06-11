
"use client";

import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar fluid rounded className="bg-gray-200">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="text-pink-700 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bossom Buddies</span>
      </Navbar.Brand>
    </Navbar>
  );
}
