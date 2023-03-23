import { Texture } from "three"
import SkyLinearBlendMaterial from "../SkyLinearBlendMaterial"

type Props = {
   textures: Texture[]
}

const ImagePlane = ({ textures }: Props) => {
   return (
      <mesh>
         <planeGeometry args={[1, 1.33]} />
         <SkyLinearBlendMaterial textures={textures} />
      </mesh>
   )
}

export default ImagePlane
