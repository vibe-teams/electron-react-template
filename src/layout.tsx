import { Routes } from "@generouted/react-router";
import { TitleBar } from "@/components/title-bar";

export function Layout() {
  return (
    <div className='root-layout'>
      <TitleBar />
      <div className='content'>
        <Routes />
      </div>
    </div>
  );
}
