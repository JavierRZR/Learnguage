"use server"

import FiltersBox from "./ui/components/FiltersBox"
import IndexBox from "./ui/components/IndexBox"
import RoomList from "./ui/components/RoomList"

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
      <RoomList />
    </main>
  )
}
