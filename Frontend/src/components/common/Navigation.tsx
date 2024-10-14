import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu";
import Link from "next/link";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function Navigation () {
  return (
    <NavigationMenu className="py-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>   
        <NavigationMenuItem>
          <Link href="/users" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Users
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>   
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>   

      </NavigationMenuList>
    </NavigationMenu>
  )
}

