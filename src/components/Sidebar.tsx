import { usePathname } from "next/navigation"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { 
  Shield, 
  LayoutDashboard, 
  Lock, 
  Cpu, 
  Activity, 
} from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
        { name: "Protected Assets", path: "/dashboard/assets", icon: Lock },
        { name: "Agent Config", path: "/dashboard/agent", icon: Cpu },
        { name: "Execution History", path: "/dashboard/history", icon: Activity },
    ];

    return (
        <aside className="w-64 bg-slate-100/80 border-r border-slate-200 flex flex-col justify-between h-full shrink-0">
            <div>
                <div className="flex items-center gap-2.5 px-6 py-5 border-b border-slate-200">
                    <Shield className="h-6 w-6 text-emerald-600 stroke-[2.5]" />
                    <span className="font-bold text-lg tracking-tight text-slate-900">
                        0xGuardian
                    </span>
                </div>

                <nav className="mt-6 px-3 space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;

                        return (
                        <Link 
                            key={item.path} 
                            href={item.path}
                            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                            isActive 
                                ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/20" // 4. Changed bg to dark emerald for white text
                                : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
                            }`}
                        >
                            <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                            {item.name}
                        </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="p-4 border-t border-slate-200">
                <ConnectButton showBalance={false} chainStatus="none"/>
            </div>
        </aside>
    );
}