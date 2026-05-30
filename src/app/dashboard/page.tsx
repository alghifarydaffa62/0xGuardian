'use client'

import { useConnection } from "wagmi"

export default function Dashboard() {
    const { address } = useConnection()

    return(
        <div>
            <h1 className="text-2xl">welcome {address?.slice(0, 10)}...{address?.slice(-10)}</h1>
        </div>
    )
}