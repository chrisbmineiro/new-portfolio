import SidebarSheet from "./sidebar-sheet"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import logo from "../../public/images/logo.png";
import { Navbar } from "./navbar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-2">
        <Link href="/">
            <Image alt="CBM Barber" src={logo} width={50} height={18} />
        </Link>
        <Navbar />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export { Header }
