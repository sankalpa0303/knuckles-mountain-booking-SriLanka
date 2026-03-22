import { Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="border-b bg-emerald-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-2">
            <Phone size={16} />
            +94 75 930 7606
          </span>
          <span className="flex items-center gap-2">
            <Mail size={16} />
            info@KnucklesExplorer.com
          </span>
        </div>
        <p className="text-emerald-100">
          Explore • Experience • Elevate
        </p>
      </div>
    </div>
  );
}