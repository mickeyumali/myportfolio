import { useState } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { personalInfo } from "@/lib/data"
import { ModeToggle } from "./ui/theme-toggle"

interface HeaderProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  

  const NavItems = () => (
    <>
      {["Home", "About", "Skills", "Projects", "Resume"].map((item) => (
        <button
          key={item}
          onClick={() => {
            scrollToSection(item.toLowerCase())
            setIsMenuOpen(false)
          }}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            activeSection === item.toLowerCase()
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-accent"
          }`}
        >
          {item}
        </button>
      ))}
    </>
  )

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavItems />
        </nav>

        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <ModeToggle />

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col space-y-4 mt-8">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
