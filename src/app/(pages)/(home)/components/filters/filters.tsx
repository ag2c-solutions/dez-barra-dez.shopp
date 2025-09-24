import { FilterCategory } from "./category/filter-category"
import { FilterGenre } from "./genre/filter-genre"

export const Filters = ()=>{
    return(
        <div className="w-full flex flex-col flex-wrap items-start gap-3 mb-8">
            <FilterGenre />
            <FilterCategory />
        </div>
    )
}