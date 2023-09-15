import { useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import {
    Nav,
    Footer,
    Sidenav,
    ViewCard,
    ServiceProviders,
    CreateAccount,
    Table,
    TableUsers,
    TableVendors,
    Login,
    Register,
    Password,
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
    Settings

} from '../index'



function Index() {
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
                            <Route path='/Table' element={<Table />} />
                            <Route path='/TableUsers' element={<TableUsers />} />
                            <Route path='/TableVendors' element={<TableVendors />} />


                            {/* Authentication */}
                            <Route path='/LAuth/Login' element={<Login />} />
                            <Route path='/LAuth/Register' element={<Register />} />
                            <Route path='/LAuth/Password' element={<Password />} />

                            {/* Page Error */}
                            <Route path='/Page401' element={<Page401 />} />
                            <Route path='/Page404' element={<Page404 />} />
                            <Route path='/Page500' element={<Page500 />} />

                            {/* Scrap  */}
                            <Route path='/SellBuy' element={<SellBuy />} />
                            <Route path='/ScrapAuction' element={<ScrapAuction />} />
                            <Route path='/ListingRequest' element={<ListingRequest />} />

                            {/* Development  */}
                            <Route path='/External' element={<External />} />
                            <Route path='/Internal' element={<Internal />} />

                            {/* Agencies  */}
                            <Route path='/Import' element={<Import />} />
                            <Route path='/MaintenanceAssistance' element={<MaintenanceAssistance />} />

                            {/* Services  */}
                            <Route path='/Accidents' element={<Accidents />} />
                            <Route path='/BeforeBuying' element={<BeforeBuying />} />
                            <Route path='/Maintenance' element={<Maintenance />} />
                            <Route path='/OnTheRoad' element={<OnTheRoad />} />
                            <Route path='/Pieces' element={<Pieces />} />
                            <Route path='/Rental' element={<Rental />} />
                            <Route path='/SellAndBuy' element={<SellAndBuy />} />

                            {/* Settings  */}
                            <Route path='/Advertisements' element={<Advertisements />} />
                            <Route path='/Settings' element={<Settings />} />

                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Index
