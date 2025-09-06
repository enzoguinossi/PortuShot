import { indentText } from "../utils/indentation"

export function useIndentation(code, setCode) {
    const handleKeyDown = (e) => {
        if (e.key === "Tab") {
            e.preventDefault()
            const textarea = e.target
            const { selectionStart, selectionEnd } = textarea

            const newCode = indentText(code, selectionStart, selectionEnd, e.shiftKey)
            setCode(newCode)

            // ajusta a posição do cursor/seleção
            requestAnimationFrame(() => {
                const tabSize = 1 // pois estamos usando "\t"
                if (e.shiftKey) {
                    textarea.selectionStart = Math.max(selectionStart - tabSize, 0)
                    textarea.selectionEnd = Math.max(selectionEnd - tabSize, 0)
                } else {
                    textarea.selectionStart = selectionStart + tabSize
                    textarea.selectionEnd = selectionEnd + tabSize
                }
            })
        }
    }

    return { handleKeyDown }
}
