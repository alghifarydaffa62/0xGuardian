'use client'

import { useConnect, useConnection, useConnectors, useDisconnect } from 'wagmi'

function App() {
  const connection = useConnection()
  const { connect, status, error } = useConnect()
  const connectors = useConnectors()
  const { disconnect } = useDisconnect()

  return (
    <>
      
    </>
  )
}

export default App
