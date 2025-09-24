import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown } from "lucide-react"
import { sortOptions } from "./sort-options"

export const Sort = ()=>{
    return(
        <div className="w-full flex justify-end p-3 ">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Ordernar por" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {
                            sortOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}