"use client";

import Header from '@/components/header'
import Cal from '@calcom/embed-react'
import React from 'react'

const PageContact = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-100 md:pt-28 pb-14">

        <Cal config={{ theme: "light" }} calLink="harshid-engravers/15min" />
      </div>
    </>
  )
}

export default PageContact