'use client'
import { useState } from "react"


export default function Pagination({ totalQuantity, quantityPerPage }) {

  if (totalQuantity <= quantityPerPage || totalQuantity == 0) return (<></>)

  const [selectedPage, setSelectedPage] = useState(1);
  const tabs = Math.ceil(totalQuantity / quantityPerPage);
  const tabsArray = ['<-', '->']




  return (
    <section className={`flex flex-row 
    mb-10 rounded-md bg-neutral-900 `}>
      <div className={`p-2 px-4 rounded-s-[0.2rem]
              border-x-[1px] border-neutral-300/10 text-neutral-300/70
              hover:bg-neutral-300/20 hover:text-neutral-300
              hover:cursor-pointer
              transition-all
              first:border-s-0 last:border-e-0`}>
        {'<-'}
      </div>
      <div className="text-xs font-extralight px-5 flex flex-col justify-center">
        <p className="">Mostrando <span className="font-semibold">12</span> de <span className="font-semibold">1000</span> resultados</p>
      </div>

      <div className={`p-2 px-4 rounded-e-[0.2rem]
              border-x-[1px] border-neutral-300/10 text-neutral-300/70
              hover:bg-neutral-300/20 hover:text-neutral-300
              hover:cursor-pointer
              transition-all
              first:border-s-0 last:border-e-0`}>
        {'->'}
      </div>
    </section>
  )
}
