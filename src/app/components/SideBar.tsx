"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItem = {
  id: number;
  ref: string;
  name: string;
};

type SidebarProps = {
  items: NavItem[];
};

export default function Sidebar({ items }: SidebarProps) {
    
    const pathname = usePathname()
    const isActive = (path: string) => pathname === path
    return (
        <ul className="sidebar-links">
        {items.map((i)=>(
          <li key={i.id}>
            <Link 
               
              href={i.ref} 
              style={{fontWeight: isActive(i.ref) ? "bold" : "normal" }}
              >{i.name}</Link>
          </li>
            ))}
            
              <Link href={'/login'} onClick={()=>{localStorage.removeItem('auth')}}>Salir</Link>
        </ul>
    )
}