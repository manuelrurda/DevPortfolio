"use client";
import { Menu } from "lucide-react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import getRoutes from "@/routes";
import Container from "@/components/container";
import { cn } from "@/lib/utils";

interface MobileNavMenuProps {
  className?: string;
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ className }) => {
  const routes = getRoutes();

  return (
    <div className={cn("border-b p-2", className)}>
      <Container>
        <div className="flex flex-row justify-between  px-4 sm:px-6 lg:px-8 h-16 items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Menu size={40} />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {routes.map((route) => (
                    <Link
                      href={route.href}
                      key={route.href}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink className="flex flex-col p-3 text-xl">
                        {route.label}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-3xl bg-black text-white p-3 rounded-xl">
              MR
            </p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default MobileNavMenu;
