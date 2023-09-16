// index.js

import React, { useEffect, useState } from "react";
import styles from './index.module.scss';
import Navbar from '../comps/Navbar';
import dynamic from 'next/dynamic';

// Import the SpinningCube component
const DynamicSpinningCube = dynamic(() => import('../comps/SpinningCube'), {
    ssr: false, // Disable server-side rendering for this component
});


const HomePage = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const [animationText, setAnimationText] = useState("");
    const text = "Qubes are not squares";

    useEffect(() => {
        if (startAnimation) {
            const animationInterval = setInterval(() => {
                const currentTextLength = Math.min(animationText.length + 1, text.length);
                setAnimationText(text.substring(0, currentTextLength));

                if (currentTextLength === text.length) {
                    clearInterval(animationInterval);
                }
            }, 55);

            return () => clearInterval(animationInterval);
        }
    }, [startAnimation, animationText, text]);

    useEffect(() => {
        setTimeout(() => {
            setStartAnimation(true);
        }, 1000);
    }, []);

    return (
        <div className={styles.homepage}>
        
        {/* Removes the white border around website */}
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
            
            <Navbar />
            
            <div className={styles.square}>
                
                {/* Titlte introduction */}
                <header className={styles.h1}>
                    {animationText}
                    <span className={styles.blinkingUnderscore}>_</span>
                </header>

                <p className={styles.paragraph}>
                    QUBE Foundation is a non-profit organization dedicated to fostering curiosity and knowledge in emerging technologies. Our mission is to empower students with a profound understanding of cutting-edge technology trends.   
                </p>
                <p className={styles.paragraph}>
                    We firmly believe that &quot;qubes are not squares,&quot; emphasizing that AI is a multi-faceted realm encompassing creativity, ethics, and innovation.
                </p>




            </div>

            <div className={styles.square} id="spinning-cube-container">
                <DynamicSpinningCube />
            </div>
        </div>
    );
}

export default HomePage;
