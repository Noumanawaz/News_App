import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="20">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                    <span className="fs-4">News Website By Nouman</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item  ">
                            <a className="nav-link" href="/general">General</a>
                        </li>
                        <li className="nav-item  ">
                            <a className="nav-link" href="/business">Business</a>
                        </li>
                        <li className="nav-item  ">
                            <a className="nav-link" href="/entertainment">Entertainment</a>
                        </li>
                        <li className="nav-item  ">
                            <a className="nav-link" href="/health">Health</a>
                        </li>
                        <li className="nav-item  ">
                            <a a className="nav-link" href="/science">Science</a>
                        </li>
                        <li className="nav-item  ">
                            <a a className="nav-link" href="/sports">Sports</a>
                        </li>
                        <li className="nav-item  ">
                            <a a className="nav-link" href="/technology">Technology</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};







export default NavBar;
