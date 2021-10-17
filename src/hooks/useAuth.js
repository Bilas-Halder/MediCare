import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

export const useAuth = () => {
    return useContext(AuthContext);
}