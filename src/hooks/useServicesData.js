import { useEffect, useState } from "react";

const useServicesData = () => {
    const [servicesData, setServicesData] = useState([]);
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