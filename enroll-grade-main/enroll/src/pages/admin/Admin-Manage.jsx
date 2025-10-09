import { Header } from "../../components/Header"
import { Navigation_Bar } from "../../components/NavigationBar"

export const Admin_Manage = () => {
    return (
        <>
        <Header />
        <Navigation_Bar userRole="super_admin" />
        </>
    )
}