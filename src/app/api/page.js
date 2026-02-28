"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchApiData } from "../redux/slice";

export default function handler() {
    const dispatch = useDispatch();
    const { apiData, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchApiData());
    }, [dispatch]);

    return (
        <div>
            <h1>Api</h1>
            
            {loading && <p>Loading API data...</p>}
            {error && <p>Error: {error}</p>}
            
            {apiData.length > 0 && (
                <div>
                    <h2>API Users:</h2>
                    <ul>
                        {apiData.map((user) => (
                            <li key={user.id}>
                                {user.name} - {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}