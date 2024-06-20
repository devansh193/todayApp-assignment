"use client";
import Calculator from "./components/Calculator";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
    <div className="flex items-center justify-center ">
    <Calculator />
  </div>
  </RecoilRoot>
  );
}
