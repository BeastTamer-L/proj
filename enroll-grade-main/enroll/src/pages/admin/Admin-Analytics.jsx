import { Header } from "../../components/Header"
import { Navigation_Bar } from "../../components/NavigationBar"
import { Sub_Nav } from "../../components/SubNav"

export const Admin_Analytics = () => {
    return (
        <>
        <Header />
        <Navigation_Bar userRole="super_admin"/>
        <Sub_Nav />
        </>
    )
}