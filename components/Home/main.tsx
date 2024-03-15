import dynamic from "next/dynamic";

const BottomComponent = dynamic(() => import("./BottomComponent/main"), {
  ssr: false,
});

const MiddleComponetMain = dynamic(() => import("./MiddleComponent/main"), {
  ssr: false,
});

import TopComponent from "./TopComponent/TopComponent";
import HamburgerMenu from "../AppBar/Hamburger";

import { MainBox } from "./index.style";


export default function HomeComponent() {
  return (
    <>
      <HamburgerMenu />
      <MainBox>
        <TopComponent />
        <MiddleComponetMain />
        <BottomComponent />
      </MainBox>
    </>
  );
}
