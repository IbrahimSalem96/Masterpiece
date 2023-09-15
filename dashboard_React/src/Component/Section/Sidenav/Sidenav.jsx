import { Link } from "react-router-dom";

function Sidenav() {
    return (
        <>
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">control Board</div>
                        <Link to='/' className="nav-link"><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div> Dashboard</Link>
                        <Link to='/ServiceProviders' className="nav-link"><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div> Service Providers</Link>




                        {/* <!-- Start Users tables  --> */}
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUsers"
                            aria-expanded="false" aria-controls="collapseUsers">
                            <div className="sb-nav-link-icon"><svg className="svg-inline--fa fa-table" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="table" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512
                                            96V416C512 451.3 483.3 480 448
                                            480H64C28.65 480 0 451.3 0 416V96C0
                                            60.65 28.65 32 64 32H448zM224
                                            256V160H64V256H224zM64
                                            320V416H224V320H64zM288
                                            416H448V320H288V416zM448
                                            256V160H288V256H448z">
                                </path>
                            </svg></div> Users tables
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseUsers" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link to='/TableUsers' className="nav-link">Users</Link>
                                <Link to='/TableVendors' className="nav-link">vendors</Link>
                            </nav>
                        </div>
                        {/* <!-- End Users tables  --> */}




                        <div className="sb-sidenav-menu-heading">CONTROL
                            INTERFACES</div>
                        {/* <!-- Start tables Services  --> */}
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseServices" aria-expanded="false" aria-controls="collapseServices">
                            <div className="sb-nav-link-icon"><svg className="svg-inline--fa fa-table" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="table" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512
                                            96V416C512 451.3 483.3 480 448
                                            480H64C28.65 480 0 451.3 0 416V96C0
                                            60.65 28.65 32 64 32H448zM224
                                            256V160H64V256H224zM64
                                            320V416H224V320H64zM288
                                            416H448V320H288V416zM448
                                            256V160H288V256H448z">
                                </path>
                            </svg></div> Services
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseServices" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">

                                <Link to='/Accidents' className="nav-link">Accidents</Link>
                                <Link to='/BeforeBuying' className="nav-link">Before buying</Link>
                                <Link to='/Maintenance' className="nav-link">Maintenance</Link>
                                <Link to='/OnTheRoad' className="nav-link">On the road</Link>
                                <Link to='/Pieces' className="nav-link">pieces</Link>
                                <Link to='/Rental' className="nav-link">Rental</Link>
                                <Link to='/SellAndBuy' className="nav-link">Sell and buy</Link>

                            </nav>
                        </div>
                        {/* <!-- End tables Services  --> */}




                        {/* <!-- Start tables Agencies  --> */}
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseAgencies" aria-expanded="false" aria-controls="collapseAgencies">
                            <div className="sb-nav-link-icon"><svg className="svg-inline--fa fa-table" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="table" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512
                                            96V416C512 451.3 483.3 480 448
                                            480H64C28.65 480 0 451.3 0 416V96C0
                                            60.65 28.65 32 64 32H448zM224
                                            256V160H64V256H224zM64
                                            320V416H224V320H64zM288
                                            416H448V320H288V416zM448
                                            256V160H288V256H448z">
                                </path>
                            </svg></div> Agencies
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseAgencies" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link to='/Import' className="nav-link">Maintenance assistance</Link>
                                <Link to='/MaintenanceAssistance' className="nav-link">Import</Link>
                            </nav>
                        </div>
                        {/* <!-- End tables Agencies  --> */}





                        {/* <!-- Start tables Development  --> */}
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseDevelopment" aria-expanded="false"
                            aria-controls="collapseDevelopment">
                            <div className="sb-nav-link-icon"><svg className="svg-inline--fa fa-table" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="table" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512
                                            96V416C512 451.3 483.3 480 448
                                            480H64C28.65 480 0 451.3 0 416V96C0
                                            60.65 28.65 32 64 32H448zM224
                                            256V160H64V256H224zM64
                                            320V416H224V320H64zM288
                                            416H448V320H288V416zM448
                                            256V160H288V256H448z">
                                </path>
                            </svg></div> Development
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseDevelopment" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link to='/Internal' className="nav-link">Internal</Link>
                                <Link to='/External' className="nav-link">External</Link>
                            </nav>
                        </div>
                        {/* <!-- End tables Development  --> */}




                        {/* <!-- Start tables Development  --> */}
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseScrap"
                            aria-expanded="false" aria-controls="collapseScrap">
                            <div className="sb-nav-link-icon"><svg className="svg-inline--fa fa-table" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="table" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512
                                            96V416C512 451.3 483.3 480 448
                                            480H64C28.65 480 0 451.3 0 416V96C0
                                            60.65 28.65 32 64 32H448zM224
                                            256V160H64V256H224zM64
                                            320V416H224V320H64zM288
                                            416H448V320H288V416zM448
                                            256V160H288V256H448z">
                                </path>
                            </svg></div> Scrap
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseScrap" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link to='/SellBuy' className="nav-link">Sell and Buy</Link>
                                <Link to='/ScrapAuction' className="nav-link">Scrap auction service</Link>
                                <Link to='/ListingRequest' className="nav-link">Listing request</Link>
                            </nav>
                        </div>
                        {/* <!-- End tables Development  --> */}




                        {/* <!-- Start  DataTable Example  --> */}
                        <div className="sb-sidenav-menu-heading">Addons</div>
                        <Link to='/Table' className="nav-link"><div className="sb-nav-link-icon"><i className="fas fa-table"></i></div> Tables</Link>
                        {/* <!-- End  DataTable Example  --> */}




                        <div style={{ width: '90%', height: '2px', backgroundColor: '#8E8E8E', margin: 'auto' }}></div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseError"
                            aria-expanded="false" aria-controls="collapseError">layout
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseError" aria-labelledby="headingTwo"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav
                                    accordion" id="sidenavAccordionPages">
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                                    data-bs-target="#pagesCollapseAuth" aria-expanded="false"
                                    aria-controls="pagesCollapseAuth">
                                    Authentication
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
                                    data-bs-parent="#sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link to='/LAuth/Login' className="nav-link">Login</Link>
                                        <Link to='/LAuth/Register' className="nav-link">Register</Link>
                                        <Link to='/LAuth/Password' className="nav-link">Forgot Password</Link>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                                    data-bs-target="#pagesCollapseError" aria-expanded="false"
                                    aria-controls="pagesCollapseError">
                                    Page Error
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne"
                                    data-bs-parent="#sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link to='/Page401' className="nav-link">Page 401</Link>
                                        <Link to='/Page404' className="nav-link">Page 404</Link>
                                        <Link to='/Page500' className="nav-link">Page 500</Link>
                                    </nav>
                                </div>
                            </nav>
                        </div>




                        <Link to='/CreateAccount' className="nav-link"><div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div> Create Account</Link>
                    </div>
                </div >
            </nav >
        </>
    )
}

export default Sidenav
