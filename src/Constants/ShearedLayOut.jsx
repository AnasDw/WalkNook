import { Outlet } from "react-router";
import { NavBar } from "../Components";

export default function ShearedLayOut() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
