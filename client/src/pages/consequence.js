import { Footer, Header, NavBar } from "../container/index";
import { sliceResults, PaginationComponent, Content } from "../component/index";
import { getSearchResults, getUserID, getEID } from "../api/index";
import { PageContext } from "../context/index";
import { UserProfile, ChangePassword, Booked } from "../container/index";

export {Footer, 
        PaginationComponent, 
        Header, 
        NavBar, 
        getSearchResults, 
        sliceResults, 
        getUserID, 
        Content, 
        PageContext,
        UserProfile,
        ChangePassword,
        Booked,
        getEID
    };