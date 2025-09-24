import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { categories } from "./categories"

export const FilterCategory = () => {
    return (
        <ToggleGroup type="single" className="flex flex-wrap gap-2" aria-label="Category Filter">
            {
                categories.map((option) => (
                    <ToggleGroupItem
                        key={option.value}
                        value={option.value}
                        className="data-[state=on]:bg-black data-[state=on]:text-white bg-gray-100 text-gray-800 hover:bg-gray-200 outline-none rounded-sm px-3 py-1 text-sm font-medium"
                    >
                        {option.label}
                    </ToggleGroupItem>
                ))
            }
        </ToggleGroup>
    )
}