import { extend } from "@react-three/fiber"
import shaderMaterial from "../CustomShaderMaterial/dreiShaderMaterial"
//@ts-ignore
import vertex from "./glsl/SimpleShaderVert.glsl"
//@ts-ignore
import fragment from "./glsl/SimpleShaderFrag.glsl"

type Props = {}

const Simple = shaderMaterial({}, vertex, fragment, () => console.log("init"))

extend({ Simple })

const SimpleShaderMaterial = () => {
   //@ts-ignore
   return <simple />
}

const SimpleShader = (props: Props) => {
   return (
      <mesh>
         <planeGeometry args={[2.3, 2]} />
         <SimpleShaderMaterial />
      </mesh>
   )
}

export default SimpleShader
