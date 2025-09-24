import { Search, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Logo } from "@/components/shared/logo/logo"
import { Cart } from "@/components/shared/cart/cart"

export const HeaderLayout = () => {
    return(
      <header className="bg-white w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Pesquisar" className="pl-10 w-64 bg-gray-100 border-0" />
              </div>
              <Cart />
            </div>
          </div>
        </div>
      </header>
    )
}