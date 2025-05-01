import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useNavigation } from "react-router-dom";
export default function RootLayout() {
    const navigation = useNavigation();
    return (
        <>
            {navigation.state === 'loading' && <p>Loading...</p>}
            <MainNavigation />
            <Outlet />
        </>

    )
}