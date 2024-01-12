"use server"

import FiltersBox from "./ui/components/FiltersBox"
import IndexBox from "./ui/components/IndexBox"

export default async function Home() {

  return (
    <main
      className={`
      w-full px-5
      flex  flex-col items-center justify-between 
      gap-24
      mt-24 `}>
      <IndexBox />
      <FiltersBox />
    </main>
  )
}
