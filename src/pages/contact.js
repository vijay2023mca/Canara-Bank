import { useState , createContext, usec} from "react";

import '../App.css';

 const usercontext =createContext();

const Component1 = () => {

    const [user, setuser] = useState("WELqwegtuikuhyrewQASDFGHJKLCOME");

    return (
        <>
        <div className="contact">
        <usercontext.Provider value={{user}} >
            <h1>{user}</h1>

        </usercontext.Provider>
        </div>
        </>
    );
};
 
export default Component1;
