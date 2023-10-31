import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner";


const Services = () => {
    // var services = []


    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])


    const { data: services, isPending } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/services')
            return res.json()
        }
    })


    if (isPending) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <>{
            isPending ? <div>hello</div> : < div className="mt-4" >
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                    <h2 className="text-5xl my-4">Our Service Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        services.map(service =>
                            <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                    }
                </div>
            </div >
        }
        </>
    );
};

export default Services;