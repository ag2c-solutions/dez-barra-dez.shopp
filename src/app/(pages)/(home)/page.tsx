import { Banner } from "./components/banner/banner";
import { ClothesList } from "./components/clothes/clothes-list";
import { Filters } from "./components/filters/filters";
import { Sort } from "./components/sort/sort";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="flex flex-col w-11/12 max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
        <Sort />
        <Filters />
        <ClothesList />
      </section>
    </>
  );
}
