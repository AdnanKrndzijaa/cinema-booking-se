import SearchWControl from "./SearchWControl";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
    const[search, setSearch] = useState("");

    return (
        <div className="
            w-full
            flex
            justify-between
            mt-[40px]
            items-center
        ">
            <img src="/images/logo.svg" className="
                h-[36px]
                w-auto
            "/>
            
            <div className="flex gap-[16px]">
                <SearchWControl
                    id="search_bar"
                    onChange={(ev)=> setSearch(ev.target.value)}
                    value={search}
                    placeholder="Search"
                />
                <Button
                type="secondary"
                label="Login"
                />
                <Button
                type="primary"
                label="Register"
                />
            </div>
        </div>
    )
}

export default Navbar;