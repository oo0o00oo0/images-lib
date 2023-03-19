import React from "react"
import { extend } from "@react-three/fiber"
import * as THREE from "three"
import shaderMaterial from "../CustomShaderMaterial/dreiShaderMaterial"
// @ts-ignore
import vertex from "./glsl/SkyBlendVert.glsl"
// @ts-ignore
import fragment from "./glsl/SkyBlendFrag.glsl"

interface Props {
   textures: THREE.Texture[];
}

const SkyLinearBlendMaterial = ({ textures }: Props) => {
   console.log(textures)

   const shaderRef = React.useRef<THREE.ShaderMaterial>()

   const time = React.useRef(Math.PI / 2)
   const tic = 16
   const slow = 100

   React.useEffect(() => {
      setInterval(() => {
         let tTime = (Math.sin(time.current) + 1) / 2

         shaderRef.current.uniforms.uBlend.value = tTime

         if (tTime === 0) {
            updateTexture(shaderRef, 1)
         } else if (tTime === 1) {
            updateTexture(shaderRef, 0)
         }
         shaderRef.current.uniforms.uOffset.value = time.current

         time.current += Math.PI / slow
      }, tic)
   }, [])

   function updateTexture(shaderRef: any, switchDir: number) {
      // console.log("SWTICH", switchDir)
      if (!switchDir) {
         shaderRef.current.uniforms.uTexture_1.value =
            textures[(increment + 1) % textures.length]
      } else {
         shaderRef.current.uniforms.uTexture_2.value =
            textures[increment % textures.length]
      }
      if (switchDir) {
         shaderRef.current.uniforms.uTexture_2.value =
            textures[(increment + 1) % textures.length]
      } else {
         shaderRef.current.uniforms.uTexture_1.value =
            textures[increment % textures.length]
      }

      // if (!switchDir) {
      //    shaderRef.current.uniforms.uTexture_3.value =
      //       textures[(increment2 + 1) % textures.length]
      // } else {
      //    shaderRef.current.uniforms.uTexture_4.value =
      //       textures[increment2 % textures.length]
      // }
      // if (switchDir) {
      //    shaderRef.current.uniforms.uTexture_4.value =
      //       textures[increment2 % textures.length]
      // } else {
      //    shaderRef.current.uniforms.uTexture_3.value =
      //       textures[(increment2 + 1) % textures.length]
      // }

      increment += 2
      // increment2 += 2
   }

   //@ts-ignore
   return <combinedColourShader ref={shaderRef} />
}

let increment = 0
let increment2 = 1

export default SkyLinearBlendMaterial

const CombinedColourShader = shaderMaterial(
   {
      uTexture_1: { value: THREE.Texture },
      uTexture_2: { value: THREE.Texture },
      uTexture_3: { value: THREE.Texture },
      uTexture_4: { value: THREE.Texture },
      uBlend: { value: 0.0 },
      uOffset: { value: 0.0 }
   },
   vertex,
   fragment,
   () => console.log("init shader")
)

extend({ CombinedColourShader })
