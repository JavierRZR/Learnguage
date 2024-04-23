"use server"

import FiltersBox from "./ui/components/FiltersBox"
import IndexBox from "./ui/components/IndexBox"
import RoomList from "./ui/components/RoomList"

export default async function Home() {
  return (
    <main
      className={`
      w-full px-5 gap-24 mt-24 selection:bg-pink-700/20 
      flex  flex-col items-center justify-between `}>
      <IndexBox />
      <FiltersBox />
      <RoomList />
    </main>
  )
}
