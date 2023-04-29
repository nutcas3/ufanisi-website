"use client"

import HeroBanner from "./components/HeroBanner"
import About from "./components/About"
import { SSRProvider } from "react-bootstrap";

export default function Home() {
  return <>
  <SSRProvider>
  <HeroBanner/>
  <About/>

  </SSRProvider>
  </>;
}
