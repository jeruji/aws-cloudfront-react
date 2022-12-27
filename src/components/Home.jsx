import React from "react";
import { Routes, Route } from "react-router-dom";

const Main = React.lazy(()=>import("./Main"));
const Loading = () => <p>Loading...</p>;

const Home = () => {
    return(
        <div>
            <React.Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </React.Suspense>
        </div>
    )
}

export default Home;