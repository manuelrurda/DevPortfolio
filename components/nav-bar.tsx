"use client";

import Link from "next/link";

import Container from "@/components/container";
import { cn } from "@/lib/utils";
import getRoutes from "@/routes";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const routes = getRoutes();
  return (
    <div className={cn("border-b p-2", className)}>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-3xl bg-black text-white p-3 rounded-xl">
              MR
            </p>
          </Link>

          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  route.active ? "text-black" : "text-gray-500"
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
