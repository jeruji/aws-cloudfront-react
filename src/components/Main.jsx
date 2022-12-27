import React, { useEffect, useState } from "react";
import retrieve from "../services/retrieve";


const Main = () => {

    const [loading, setLoading] = useState(true);
    const [greeting, setGreeting] = useState("");

    useEffect(()=>{
        async function getGreeting() {
            const tempGreeting = await retrieve.retrieveGreeting();
            setGreeting(tempGreeting);
            setLoading(false);
        }
        getGreeting();
    },[])

    return (
        !loading && (
            <p>{greeting}</p>
        )
    )
}

export default Main;