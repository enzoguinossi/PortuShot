import { toPng } from "html-to-image"

export async function downloadPng(ref, filename) {
    if (!ref.current) return
    const dataUrl = await toPng(ref.current, { pixelRatio: 2, cacheBust: true })
    const link = document.createElement("a")
    link.download = filename || "portugol.png"
    link.href = dataUrl
    link.click()
}
