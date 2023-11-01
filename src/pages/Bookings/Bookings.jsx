import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios, { Axios } from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../firebase/components/LoadingSpinner";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    // const [bookings, setBookings] = useState([]);
    const url = `http://localhost:3000/booking?email=${user?.email}`;

    // console.log(bookings)


    const { data: bookings ,isPending,refetch } = useQuery({
        queryKey: ['userBookings'],
        queryFn: async () => {
            const data =await fetch(url, {credentials: 'include'})
            return await data.json();
        }
    })


    

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setBookings(data))
    // }, [url]);





    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {

            axios.delete(`http://localhost:3000/booking/${id}`)
                .then(data => {
                    if (data.data.deletedCount > 0) {
                        refetch()
                        alert('deleted successful');
                        // const remaining = bookings.filter(bookingSingle => bookingSingle._id !== id);
                        // setBookings(remaining);
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        // fetch(`http://localhost:5000/bookings/${id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({ status: 'confirm' })
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.modifiedCount > 0) {
        //             // update state
        //             const remaining = bookings.filter(booking => booking._id !== id);
        //             const updated = bookings.find(booking => booking._id === id);
        //             updated.status = 'confirm'
        //             const newBookings = [updated, ...remaining];
        //             setBookings(newBookings);
        //         }
        //     })
    }


    if(isPending){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h2 className="text-5xl">Your bookings: {bookings?.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;