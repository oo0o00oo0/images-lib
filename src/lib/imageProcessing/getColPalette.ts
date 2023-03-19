import { ImageData } from "@/Types/FIleTypes"
import ColorThief from "../color-thief/color-thief"

export const imageProcess = async (files: File[]): Promise<ImageData> => {
  const colorThief = new ColorThief()

  let img: any = await readFileAsync(files[0])

  return { data: colorThief.getPalette(img, 24, 10), img: img }
}

export function readFileAsync(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = function (e) {
      const img = document.createElement("img") as any
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = reader.result
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
