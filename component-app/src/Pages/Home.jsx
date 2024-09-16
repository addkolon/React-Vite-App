import React from 'react';
import Cards from './../Components/Cards/Cards';
import HeroBanner from './../Components/HeroBanner/HeroBanner';

export default function Home({ data }) {
  return (
    <>
      <HeroBanner data={data} />
      <Cards data={data} />
    </>
  );
}