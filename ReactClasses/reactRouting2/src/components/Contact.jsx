import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
const Contact = () =>{
    return(
        <>
            <h1>Contact page</h1>
                <NavLink to='contact-us'><button>Contact Us</button></NavLink>
                <NavLink to='address'><button>Address</button></NavLink>
            <Outlet />

        </>
    )
}

export default Contact