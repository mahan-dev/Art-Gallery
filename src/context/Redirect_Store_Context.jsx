import React, { createContext, useContext, useState } from 'react';

import { searchContextProvider } from '../components/shared/Redirect_Store_Navbar';

export const Redirect_Store_Context_ = createContext();
const Redirect_Store_Context = ({children}) => {
    const [searchValue, setSearchValue] = useState("");
    // let searchValue = useContext(searchContextProvider);
    // console.log(searchValue);
    return (
        <div>
            <Redirect_Store_Context_.Provider value={{searchValue, setSearchValue }}>
                {children}
            </Redirect_Store_Context_.Provider>

            
        </div>
    );
};

export default Redirect_Store_Context;