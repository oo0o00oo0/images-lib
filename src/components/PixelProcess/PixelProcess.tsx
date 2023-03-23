import {
   Backdrop,
   PerspectiveCamera,
   useFBO,
   useTexture
} from "@react-three/drei"
import { createPortal, useFrame, useThree, extend } from "@react-three/fiber"
import React from "react"
import * as THREE from "three"
import shaderMaterial from "../CustomShaderMaterial/dreiShaderMaterial"
// @ts-ignore
import vertex from "./glsl/PixelProcessVert.glsl"
// @ts-ignore
import fragment from "./glsl/PixelProcessFrag.glsl"

type Props = {
   position: [number, number, number]
   texture: THREE.Texture
}

const PixelProcess = ({ position, texture }: Props) => {

   console.log(texture)
   return (
      <>
         <mesh
            layers={1}
            position={position}>
            <meshBasicMaterial
               side={THREE.DoubleSide}
               map={texture}
            />
            <planeGeometry args={[1, 1.2]} />
         </mesh>
         <FrameBuffer />
      </>
   )
}

const FrameBuffer = () => {
   const mesh = React.useRef<any>()

   const { viewport, gl, scene, camera, } = useThree()

   let width = innerWidth
   let height = innerHeight

   const res = devicePixelRatio 

   const mainRenderTarget = useFBO(width * res, height * res)

   React.useLayoutEffect(() => {
      // gl.setClearColor(0xffffff, 1)
      camera.layers.set(1)
      gl.setRenderTarget(mainRenderTarget)
      gl.render(scene, camera)
      camera.layers.set(0)
      
      mesh.current.material.uniforms.uFBO.value = mainRenderTarget.texture
      gl.setRenderTarget(null)

   }, [])

   useFrame(({  pointer }) => {
      mesh.current.material.uniforms.uPointer.value = pointer
   })

   return (
      <mesh
         ref={mesh}
         scale={[viewport.width/2, viewport.height/2, 1]}>
         <planeGeometry args={[1, 1.4]} />
         {/* @ts-ignore */}
         <combinedColourShader side={THREE.DoubleSide} />
      </mesh>
   )
}

const CombinedColourShader = shaderMaterial(
   {
      uFBO: { value: THREE.Texture },
      uPointer: { value: new THREE.Vector2() }
   },
   vertex,
   fragment,
   () => console.log("init shader")
)

extend({ CombinedColourShader })

export default PixelProcess
