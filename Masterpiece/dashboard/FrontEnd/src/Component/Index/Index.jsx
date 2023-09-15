import { useEffect, useContext } from 'react';
import { Routes, Route } from "react-router-dom";

import {
    Nav,
    Footer,
    Sidenav,
    ViewCard,
    ServiceProviders,
    CreateAccount,
    ResetPassword,
    TableSort,
    TableUsers,
    TableAdmin,
    Login,
    Register,
    Password,
    FormData,
    Page404,
    Page500,
    Page401,
    SellBuy,
    ScrapAuction,
    ListingRequest,
    External,
    Internal,
    Import,
    MaintenanceAssistance,
    Accidents,
    BeforeBuying,
    Maintenance,
    OnTheRoad,
    Pieces,
    Rental,
    SellAndBuy,
    Advertisements,
    Settings,
    Cars,
    Motorcycles,
    Buses,
    Trucks,
    Machines,
    SpareParts,
    Scrap,

} from '../index'
import AuthLogin from '../Auth'
import { AdminInfoContext } from '../../context/AdminInfoProvider'

function Index() {
    const { adminInfo, setAdminInfo } = useContext(AdminInfoContext)

    const user = null


    useEffect(() => {
        const handleSidebarToggle = () => {
            document.body.classList.toggle('sb-sidenav-toggled');
        };

        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', handleSidebarToggle);
        }

        return () => {
            if (sidebarToggle) {
                sidebarToggle.removeEventListener('click', handleSidebarToggle);
            }
        };
    }, []);


    return (
        <>
            {adminInfo?.isAdmin && adminInfo?.token && adminInfo?.username && adminInfo?.position && adminInfo?.AdminPhoto ? (
                <>
                    <Nav />
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">
                            <Sidenav />
                        </div>
                        <div id="layoutSidenav_content">
                            <main style={{ paddingLeft: "40px" }}>
                                <Routes>

                                    {/* All Services */}
                                    <Route path='/' element={<ViewCard />} />
                                    <Route path='/ServiceProviders' element={<ServiceProviders />} />
                                    <Route path='/CreateAccount' element={<CreateAccount />} />
                                    <Route path='/resetPassword' element={<ResetPassword />} />
                                    <Route path='/Table' element={<TableSort />} />
                                    <Route path='/TableUsers' element={<TableUsers />} />
                                    <Route path='/TableAdmin' element={<TableAdmin />} />


                                    {/* Authentication */}
                                    <Route path='/LAuth/Login' element={<Login />} />
                                    <Route path='/LAuth/Register' element={<Register />} />
                                    <Route path='/LAuth/Password' element={<Password />} />
                                    <Route path='/LAuth/FormData' element={<FormData />} />

                                    {/* Page Error */}
                                    <Route path='/Page401' element={<Page401 />} />
                                    <Route path='/Page404' element={<Page404 />} />
                                    <Route path='/Page500' element={<Page500 />} />

                                    {/* Scrap  */}
                                    {/* <Route path='/SellBuy' element={<SellBuy />} /> */}
                                    <Route path='/ScrapAuction' element={<ScrapAuction />} />
                                    <Route path='/ListingRequest' element={<ListingRequest />} />

                                    {/* Development  */}
                                    {/* <Route path='/External' element={<External />} /> */}
                                    <Route path='/Internal' element={<Internal />} />

                                    {/* Agencies  */}
                                    <Route path='/Import' element={<Import />} />
                                    {/* <Route path='/MaintenanceAssistance' element={<MaintenanceAssistance />} /> */}

                                    {/* Services  */}
                                    <Route path='/Accidents' element={<Accidents />} />
                                    <Route path='/BeforeBuying' element={<BeforeBuying />} />
                                    <Route path='/Maintenance' element={<Maintenance />} />
                                    {/* <Route path='/OnTheRoad' element={<OnTheRoad />} /> */}
                                    <Route path='/Pieces' element={<Pieces />} />
                                    <Route path='/Rental' element={<Rental />} />
                                    {/* <Route path='/SellAndBuy' element={<SellAndBuy />} /> */}

                                    {/* Shops  */}
                                    <Route path='/Cars' element={<Cars />} />
                                    <Route path='/Motorcycles' element={<Motorcycles />} />
                                    <Route path='/Buses' element={<Buses />} />
                                    <Route path='/Trucks' element={<Trucks />} />
                                    <Route path='/Machines' element={<Machines />} />
                                    <Route path='/Spare-Parts' element={<SpareParts />} />
                                    <Route path='/Scrap' element={<Scrap />} />

                                    {/* Settings  */}
                                    <Route path='/Advertisements' element={<Advertisements />} />
                                    <Route path='/Settings' element={<Settings />} />

                                </Routes>
                            </main>
                            <Footer />
                        </div>
                    </div>
                </>
            ) : (
                <Routes>
                    <Route path='/' element={<AuthLogin />} />
                </Routes>
            )

            }
        </>
    )
}

export default Index