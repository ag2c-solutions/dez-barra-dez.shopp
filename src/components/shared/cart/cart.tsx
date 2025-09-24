import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"

export const Cart = () => {
    return(
        <Sheet>
            <SheetTrigger asChild>
                <div className="relative">
                    <ShoppingCart className="w-7 h-7 text-gray-600 cursor-pointer" />
                    <Badge 
                      className="absolute top-[-10px] right-[-10px] h-4 min-w-4 rounded-full px-1 bg-red-800 font-mono tabular-nums"
                      variant="default" >
                        2
                    </Badge>
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho de compras</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription>
                </SheetHeader>

                <SheetFooter>
                    <Button type="submit">Comprar</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}