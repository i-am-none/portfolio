import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const RenderModel = ({ children, classname }) => {
    return (
        <Canvas 
        className={clsx("w-screen h-screen relative", classname)}
        >
            <Suspense fallback={null}>
                
                {children}

            </Suspense>

        </Canvas>
    )
}