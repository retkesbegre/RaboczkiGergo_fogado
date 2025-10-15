import React from "react";
import axios from "axios";

export default function Szobak() {
    axios.get(`http://localhost:3000/api/szobak`)
            .then(response => {
                console.log("Foglaltsági adatok frissítve:", response.data);
                setData(response.data);
            })
            .catch(error => console.error("Hiba:", error))
            .finally(() => setLoading(false));
    return (
        <div><h1>hello</h1></div>
    );
}