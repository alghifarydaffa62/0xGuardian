'use client'
import { ReactNode } from "react";
import { useConnections } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const connection = useConnections();
  const router = useRouter();

  useEffect(() => {
    if (connection.length === 0) {
      router.push('/');
    }
  }, [connection, router]);

  if (connection.length === 0) return null;

  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-900 font-sans overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200/80 backend-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </div>
            <span className="text-sm font-medium text-slate-600">
              0xGuardian AI Active Monitoring
            </span>
          </div>
          
          <div className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full font-mono border border-slate-200">
            Network: Mainnet Relayer
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}