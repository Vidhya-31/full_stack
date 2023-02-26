import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "../components/UserList";
import EditUser from "../components/EditUser";


const Pages = () =>{
    return(
        <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<UserList/>}/> 
        <Route path="edit/:id" element={<EditUser/>}/> 
        </Routes>
       </BrowserRouter>
        </div>
    )

}
export default Pages;
