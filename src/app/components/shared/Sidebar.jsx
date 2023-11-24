import { sidebarLinks } from "@/util/database"
import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="h-screen w-[15vw] bg-blue-300 ">
     <div>
     {
        sidebarLinks.map((item ,index) => {
          return (
            <ul key={index}>
              <li className="p-1">
                <Link href={item.path} className="bg-red-300 p-1 rounded-md ml-">{item.name}</Link>
              </li>
            </ul>
          )
        })
      }
     </div>
    </div>
  )
}

export default Sidebar