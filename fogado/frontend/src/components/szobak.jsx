import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Szobak() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);

        axios.get("http://localhost:3000/api/szobak")
            .then(response => {
                if (!cancelled) {
                    console.log("Foglaltsági adatok:", response.data);
                    setData(response.data);
                }
            })
            .catch(err => {
                if (!cancelled) {
                    console.error("Hiba:", err);
                    setError(err);
                }
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    if (loading) return <div>Betöltés...</div>;
    if (error) return <div>Hiba: {error.message || "Ismeretlen hiba"}</div>;

    return (
        <div>
            <h2>Szobák</h2>
            {data.length === 0 ? (
                <div>Nincs találat</div>
            ) : (
                <ul>
                    {data.map((s, idx) => (
                        <li key={idx}>{s.sznev} - {s.agy}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}