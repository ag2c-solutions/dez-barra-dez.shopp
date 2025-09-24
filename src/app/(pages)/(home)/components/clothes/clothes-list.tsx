import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { clothes } from "./clothes"
import { Button } from "@/components/ui/button"

export const ClothesList = () => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {clothes.map((clothe) => (
            <Card key={clothe.id} className="overflow-hidden">
              <div className={`${clothe.bgColor} relative pb-6 flex items-center justify-center h-64`}>
                <Image
                  src={clothe.image || "/placeholder.svg"}
                  alt={clothe.name}
                  className="max-w-full max-h-full"
                  fill
                />
              </div>
              <CardContent className="pt-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900 mb-1">{clothe.name}</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-2">{clothe.price}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Button variant="outline" className="w-full text-xs text-gray-800">adicionar ao carrinho</Button>
                    <Button className="w-full bg-green-900 hover:bg-green-700 text-white">comprar</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
    )
}