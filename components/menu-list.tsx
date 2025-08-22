"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"> */}
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
              <li className="row-span-3">
                <NavigationMenuLink asChild className="hover:bg-gray-100 rounded-md p-2 transition-colors">
                  {/* <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  > */}
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium ">
                      AromasdeCafe
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Sumergete en el apasionante mundo del cafe con nuestra web especializada en la venta de granos de cafe de alta calidad, molidos y en capsulas.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu informacion, tus pedidos y mucho mas.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Seccion dedicada a promociones y descuentos especiales
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos complementarios como tazas, molinillos, prensas, etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] p-4 gap-2 md:w-[500px] md:grid-cols-1 lg:w-[600px]">   {/* ojito aca */}
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/accesorios">Accesorios</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Café grano",
    href: "/category/grano",
    description:
      "Granos de cafe enteros que requieren ser molidos antes de su preparacion. Ideal para los amantes del cafe.",
  },
  {
    title: "Café molido",
    href: "/category/molido",
    description:
      "Cafe en forma de polvo listo para ser utilizado en diferentes metodos de preparacion como la cafetera.",
  },
  {
    title: "Café de cápsula",
    href: "/category/capsula",
    description:
      "Cafe envasado en capsulas individuales, ofrecioendo conveniencia y consistencia en la preparacion.",
  },
]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    // <li {...props}>
    <li className="hover:bg-gray-100 rounded-md p-2 transition-colors duration-200" {...props}>

      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium pb-2 ">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug ">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

