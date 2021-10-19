import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

const useServicesData = () => {
    const { servicesData, setServicesData } = useAuth();
    useEffect(() => {
        fetch("./servicesData.json")
            .then(res => res.json())
            .then(data => {
                setServicesData(data);
            })
            .catch(err => console.error(err));
    }, []);
    return servicesData;
};

export default useServicesData;