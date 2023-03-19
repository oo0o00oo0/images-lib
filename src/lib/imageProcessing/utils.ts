import { useEffect, useRef } from "react"

export function arrToRGB(arr: number[]) {
  let chunkSize = 3
  let chunks = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize))
  }
  return chunks
}
