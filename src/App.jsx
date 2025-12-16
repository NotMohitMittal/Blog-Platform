import { useEffect, useState } from "react";
import "./App.css";

import NavigationBar from "./components/Navigation/Navigation";
import LightRays from "./components/Background/LightRays";
import SpotlightCard from "./components/Container/SpotlightCard";
import PostForm from "./components/PostEntry/PostForm";
import PostList from "./components/Posts/PostList";
import BlurText from "./components/Title/BlurText";
import PostListProvider from "./Store/PostListProvider";

const App = () => {
    const [selectedPage, setSelectedPage] = useState("");
    const [headingText, setHeadingText] = useState("We-Share");

    // Heading change logic using the useEffect hook
    useEffect(() => {
        if (selectedPage === "Home") {
            setHeadingText("Blog-Posts");
        } else if (selectedPage === "Add-Blog") {
            setHeadingText("Add-Blog");
        }
    }, [selectedPage]);

    // Page render logic
    const renderPages = () => {
        if (selectedPage === "Home") {
            return (
                <>
                    <div className="postContainer">
                        <PostList></PostList>
                    </div>
                </>
            );
        } else if (selectedPage === "Add-Blog") {
            return (
                <>
                    <PostForm></PostForm>;
                </>
            );
        }
    };

    return (
        <PostListProvider>
            <div className="custom-background">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.5}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>

            <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
            >
                <div className="pageHeading" style={{ color: "white" }}>
                    <BlurText
                        text={headingText}
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-2xl mb-8"
                    />
                </div>

                {renderPages()}

            </SpotlightCard>

            <NavigationBar setSelectedPage={setSelectedPage}></NavigationBar>
        </PostListProvider>
    );
};

export default App;
