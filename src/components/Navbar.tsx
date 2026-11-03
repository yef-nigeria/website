"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const aboutMenu: { title: string; href: string; description: string }[] = [
  {
    title: "Who We Are",
    href: "/about/who-we-are",
    description: "Learn more about who we are as an NGO and our impact",
  },
  {
    title: "Thematic Areas",
    href: "/about/thematic-areas",
    description: "Research & Areas of Interest",
  },
  {
    title: "Research and Publications",
    href: "/about/research-and-publications",
    description: "Research & Areas of Interest",
  },
  {
    title: "YEF Impact",
    href: "/about/yef-impact",
    description: "Community & Grassroots Social Impact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen && !pathname.startsWith("/about"))
      setAboutDropdownOpen(false);
  }, [mobileMenuOpen, pathname]);

  return (
    <header className="bg-blue-900 py-2 text-white w-full sticky top-0 z-50">
      <NavigationMenu className="justify-between container mx-auto list-none px-4 sm:px-6 lg:px-8">
        <NavigationMenuItem className="shrink-0">
          <NavigationMenuLink asChild>
            <Link href="/" className="flex items-center gap-2 min-w-0">
              <Image
                src="/assets/images/yef-logo-white.png"
                alt="yef-logo"
                width={80}
                height={80}
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain shrink-0"
              />
              <p className="font-semibold tracking-tight leading-tight uppercase ">
                Youth Empowerment <br />
                Foundation
              </p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Desktop nav: hidden on mobile */}
        <NavigationMenuList className="hidden md:flex flex-1 justify-end">
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
                    className="hover:bg-blue-100 hover:text-blue-900 p-2 rounded-md transition-all"
                  />
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
          <NavigationMenuItem>
            <Button asChild size="sm" className="hidden md:inline-flex" variant={'secondary'}>
              <Link
                target="_blank"
                href={
                  "https://give-usa.keela.co/youth-empowerment-foundation-donate-page"
                }
              >
                Donate Now
              </Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md hover:bg-blue-900 focus:outline-hidden focus:ring-2 focus:ring-white/50"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden />
          ) : (
            <Menu className="h-6 w-6" aria-hidden />
          )}
        </button>
      </NavigationMenu>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-200 ease-out",
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="bg-blue-900 border-t border-blue-400/30 px-4 py-4 space-y-1">
          {(() => {
            const mainLinkStyle = (href: string) =>
              cn(
                "block py-2.5 px-3 rounded-md text-sm font-medium transition-colors text-white",
                pathname === href ? "bg-blue-800" : "hover:bg-blue-800/80",
              );
            return (
              <>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={mainLinkStyle("/")}
                >
                  Home
                </Link>

                {/* About dropdown */}
                <div>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between py-2.5 px-3 rounded-md text-sm font-medium transition-colors text-white",
                      pathname.startsWith("/about")
                        ? "bg-blue-800"
                        : "hover:bg-blue-800/80",
                    )}
                    onClick={() => setAboutDropdownOpen((open) => !open)}
                    aria-expanded={aboutDropdownOpen}
                    aria-controls="mobile-about-menu"
                  >
                    About
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform",
                        aboutDropdownOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    id="mobile-about-menu"
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      aboutDropdownOpen
                        ? "max-h-64 opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="pl-3 pt-1 pb-2 space-y-0.5 border-l-2 border-blue-400/40 ml-2">
                      {aboutMenu.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            // setAboutDropdownOpen(false);
                          }}
                          className={cn(
                            "block py-2 px-3 rounded-md text-sm font-medium transition-colors text-white",
                            pathname === item.href
                              ? "bg-blue-800"
                              : "hover:bg-blue-800/80",
                          )}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/young-people"
                  onClick={() => setMobileMenuOpen(false)}
                  className={mainLinkStyle("/young-people")}
                >
                  Young People
                </Link>
                <Link
                  href="/young-people"
                  onClick={() => setMobileMenuOpen(false)}
                  className={mainLinkStyle("/young-people")}
                >
                  the YEF blog
                </Link>
                <div className="pt-2">
                  <Button asChild className="w-full" size="sm">
                    <Link
                      target="_blank"
                      href="https://give-usa.keela.co/youth-empowerment-foundation-donate-page"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Donate Now
                    </Link>
                  </Button>
                </div>
              </>
            );
          })()}
        </nav>
      </div>
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
