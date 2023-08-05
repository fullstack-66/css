"use client";
import { FC } from "react";
import PopoverComponent from "@/components/Popover";
import DropdownComponent from "@/components/Dropdown";
const Home: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <PopoverComponent trigger={"Click Me"}>Some content</PopoverComponent>
      <DropdownComponent />
    </div>
  );
};

export default Home;
