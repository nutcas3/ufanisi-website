"use client"

import HeroBanner from "./components/HeroBanner"

import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return <>
  <HeroBanner/>
  </>;
}
