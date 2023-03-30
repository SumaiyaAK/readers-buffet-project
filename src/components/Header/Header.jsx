import React from 'react';

const Header = () => {
    return (
        <div className='header '>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Readers Buffet</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="flex gap-x-8 cursor-pointer">
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Contact</p>
                    </div>
                    
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://images.unsplash.com/photo-1590422373532-f12b5fba24e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
        
    );
};

export default Header;