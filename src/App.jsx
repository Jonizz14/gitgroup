import React from 'react'
import Customer from "./pages/customer"
import Help from "./pages/help"
import Income from "./pages/income"
import Product from "./pages/product"
import Promote from "./pages/promote"
import Dashboard from "./components/dashboard"

function App() {
  return (
    <>
      <Customer />
      <Help />
      <Income />
      <Product />
      <Promote />
      <Dashboard />
    </>
  )
}

export default App