import { extend, useFrame } from "@react-three/fiber"
import shaderMaterial from "../CustomShaderMaterial/dreiShaderMaterial"
//@ts-ignore
import vertex from "./glsl/SimpleShaderVert.glsl"
//@ts-ignore
import fragment from "./glsl/SimpleShaderFrag.glsl"
import { useRef } from "react"
import { Vector3 } from "three"

type Props = {}

const Simple = shaderMaterial(
   {
      uTime: { value: 0 },
      uPointer: { value: new Vector3(0, 0, 0) }
   },
   vertex,
   fragment,
   () => console.log("init")
)

extend({ Simple })

const SimpleShaderMaterial = () => {
   const shader = useRef(null)

   useFrame(({ clock, pointer }) => {
      shader.current.uniforms.uPointer.value.x = pointer.x
      shader.current.uniforms.uPointer.value.y = pointer.y
      shader.current.uniforms.uTime.value = clock.getElapsedTime() * 4
   })
   //@ts-ignore
   return <simple ref={shader} />
}

const SimpleShader = (props: Props) => {
   return (
      <mesh>
         <planeGeometry args={[2, 2]} />
         <SimpleShaderMaterial />
      </mesh>
   )
}

export default SimpleShader
//
