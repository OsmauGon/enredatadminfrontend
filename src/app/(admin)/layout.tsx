
import AuthGuard from "../components/AuthGuard"
import SideBar from "../components/SideBar"
import '../styles/sidebar.css'
export default function AdminLayout({children}: {children: React.ReactNode}){
    const isAutenticated = true 
    //despues debemos agregar una autenticacion, por el momento lo dejamos en verdadera

    if(!isAutenticated){
        return <div>NO AUTORIZADO</div>
    }
    const navItems = [
        {id: 1,ref: "/dashboard", name: "Dashboard"},
        {id: 2,ref: "/users", name: "Usuarios"},
        {id: 3,ref: "/cases", name: "Casos"},
        {id: 4,ref: "/events", name: "Eventos"},
        {id: 5,ref: "/infoutil", name: "Informacion"}
    ]

    return (
        <AuthGuard>
            
        <div style={{display: "flex"}}>
            <aside style={{width: "250px"}}>
                <nav>
                    <SideBar items={navItems}></SideBar>
                </nav>
            </aside>
            <main style={{flex:1}}>
                {children}
            </main>
        </div>
        </AuthGuard>
    )
}