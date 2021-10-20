import { useEffect } from "react";
import { useAuth } from "./useAuth";

const useDoctorsData = () => {
    const { doctorsData, setDoctorsData } = useAuth();
    useEffect(() => {
        fetch("./doctorData.json")
            .then(res => res.json())
            .then(data => {
                setDoctorsData(data);
            })
            .catch(err => console.error(err));
    }, []);
    return doctorsData;
};

export default useDoctorsData;