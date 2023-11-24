import { adminNavbarLinks, userNavbarLinks } from "@/util/database";
import Link from "next/link";

const isUserView = false;
const isAdminView = true
const Navbar = () => {
  return (
    <div className="h-20 w-full flex justify-evenly items-center p-2 bg-slate-800">
      
      {isAdminView ? (
        <div className="flex space-x-2">
     { 
      adminNavbarLinks.map((item,index) => {
        return(
          <ul key={index}>
            <li className="adminNav-btnn"><Link href={item.path}>{item.name}</Link></li>
          </ul>
        )
      })
     }
        </div>
      ) : (
        <div className="flex">
          {userNavbarLinks.map((item, index) => {
            return (
              <ul key={index}>
                <li className="btn">
                  <Link href={item.path}>{item.name}</Link>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
