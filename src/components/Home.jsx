import React from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'

function Home() {
  const tshirt = useLoaderData();
  return (
    <div>
      <h2>this is home {tshirt.length}</h2>
    </div>
  )
}

export default Home
