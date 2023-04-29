import React from 'react'
import Link from 'next/link'
import { Container, Nav, NavItem, NavLink, Tab, Tabs } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <Link href={`/about/`}>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          interdum libero vitae leo iaculis, eu laoreet quam egestas.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>

        <p className="mt-4">
          Nulla hendrerit lectus at magna sollicitudin, vel scelerisque magna
          tristique. Sed vitae eros eu ex bibendum consectetur.
        </p>
      </div>
    </Link>
  );
}
export default About;