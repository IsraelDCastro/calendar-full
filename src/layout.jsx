import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./navbar";
import { Outlet, useNavigate } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";

export default function PageLayout() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <ToastContainer transition={Bounce} />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </NextUIProvider>
  );
}
