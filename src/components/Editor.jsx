import { useRef } from "react"
import { useAutoResizeTextarea } from "../hooks/useAutoResizeTextarea.jsx"
import { useIndentation } from "../hooks/useIndentation.js"

export function Editor({ code, setCode }) {
    const taRef = useRef(null)
    useAutoResizeTextarea(taRef, code)
    const { handleKeyDown } = useIndentation(code, setCode)

    const lineCount = code.split("\n").length
    const lines = Array.from({ length: lineCount }, (_, i) => i + 1)

    return (
        <section className="editor">
            <div className="editor-head">Editor</div>
            <div className="editor-body">
                <div className="gutter">
                    {lines.map(n => <div key={n} className="ln">{n}</div>)}
                </div>
                <textarea
                    ref={taRef}
                    spellCheck={false}
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Digite seu Portugol aqui..."
                />
            </div>
        </section>
    )
}
