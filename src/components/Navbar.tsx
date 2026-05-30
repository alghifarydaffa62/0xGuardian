import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function Navbar() {
    return(
        <nav className="flex justify-around items-center">
            <h1>0xGuardian</h1>

            <ul className="flex gap-6">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">How it Works</a>
                </li>
            </ul>

            <ConnectButton showBalance={false} chainStatus="none"/>
        </nav>
    )
}