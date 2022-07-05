import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { MainSection } from './components/MainSection';


export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="">
        <MainSection />
      </div>
    </>
  );
}
