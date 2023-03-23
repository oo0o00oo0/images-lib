import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import styled from "styled-components/macro"
import ImagePlane from "../ImagePlane"
import { OrbitControls, useTexture } from "@react-three/drei"
import PixelProcess from "../PixelProcess"
import { Perf } from "r3f-perf"
import SimpleShader from "../SimpleShader"

export const TCanvas = () => {
   return (
      <CanvasWr>
         <Canvas
            camera={{ fov: 70 }}
            // dpr={window.devicePixelRatio}
            dpr={[1, 2]}>
            <Suspense fallback={null}>
               {/* <Perf minimal /> */}
               {/* <Skies /> */}
               <SimpleShader />
            </Suspense>
            {/* <OrbitControls /> */}
         </Canvas>
      </CanvasWr>
   )
}

const Skies = () => {
   // const urls = new Array(16)
   //    .fill(0)
   //    .map((_, i) => `assets/skies/sky.arena_${i + 1}.jpg`)
   const textures = useTexture(urls)

   return <ImagePlane textures={textures} />

   // return (
   //    <group
   //       scale={2}
   //       position={[0.5, -0.65, 0]}>
   //       <PixelProcess
   //          position={[0, 0, 0]}
   //          texture={textures[Math.floor(Math.random() * textures.length)]}
   //       />
   //       <PixelProcess
   //          position={[-1, 0, 0]}
   //          texture={textures[Math.floor(Math.random() * textures.length)]}
   //       />
   //       <PixelProcess
   //          position={[0, 1.1, 0]}
   //          texture={textures[Math.floor(Math.random() * textures.length)]}
   //       />
   //       <PixelProcess
   //          position={[-1, 1.1, 0]}
   //          texture={textures[Math.floor(Math.random() * textures.length)]}
   //       />
   //    </group>
   // )
}

const CanvasWr = styled.div`
   z-index: 0;
   position: fixed;
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
`

export default TCanvas

const urls = [
   "assets/skies/sky.arena_100.jpg",
   "assets/skies/sky.arena_118.jpg",
   "assets/skies/sky.arena_130.jpg",
   "assets/skies/sky.arena_135.jpg",
   "assets/skies/sky.arena_140.jpg",
   "assets/skies/sky.arena_141.jpg",
   "assets/skies/sky.arena_150.jpg",
   "assets/skies/sky.arena_156.jpg",
   "assets/skies/sky.arena_179.jpg",
   "assets/skies/sky.arena_186.jpg",
   "assets/skies/sky.arena_187.jpg",
   "assets/skies/sky.arena_188.jpg",
   "assets/skies/sky.arena_197.jpg",
   "assets/skies/sky.arena_198.jpg",
   "assets/skies/sky.arena_201.jpg",
   "assets/skies/sky.arena_208.jpg",
   "assets/skies/sky.arena_212.jpg",
   "assets/skies/sky.arena_217.jpg",
   "assets/skies/sky.arena_219.jpg",
   "assets/skies/sky.arena_223.jpg",
   "assets/skies/sky.arena_57.jpg",
   "assets/skies/sky.arena_77.jpg",
   "assets/skies/sky.arena_79.jpg"
]
