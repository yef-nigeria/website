"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const aboutMenu: { title: string; href: string; description: string }[] = [
  {
    title: "Who We Are",
    href: "/about/who-we-are",
    description: "Learn more about who we are as an NGO and our impact",
  },
  {
    title: "Thematic Areas",
    href: "#",
    description: "Research & Areas of Interest",
  },
  {
    title: "Research and Publications",
    href: "#",
    description: "Research & Areas of Interest",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-blue-500 py-2 text-white w-full">
      <NavigationMenu className="justify-between container mx-auto list-none">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/images/yef-logo-white.png"
                alt="yef-logo"
                width={80}
                height={80}
              />
              <h6 className="font-medium">Youth Empowerment Foundation</h6>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuList>
          <NavigationMenuItem className="relative">
            <NavigationMenuLink active={pathname.includes("/about")}>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
            </NavigationMenuLink>

            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-2 p-2">
                {aboutMenu.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    className="hover:bg-blue-100 p-2 rounded-md transition-all"
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              active={pathname == "/young-people"}
            >
              <Link href="/young-people">Young People</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`font-cab ${navigationMenuTriggerStyle()}`}
            >
              <Link href="/young-people">the YEF blog</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Button
            as="a"
            href="https://give-usa.keela.co/youth-empowerment-foundation-donate-page"
            target="_blank"
            className="bg-gray-600 hover:bg-blue-600 text-white rounded-xl px-6 py-3"
          >
            Donate Now
          </Button>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="font-medium">{title}</div>
          <p className="text-muted-foreground text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
