import React, { useMemo, useRef, useState } from "react"
import Prism from "./prism-portugol"
import { defaultSample } from "./utils/defaultSample"
import { downloadPng } from "./utils/downloadPng"
import { Header } from "./components/Header"
import { Editor } from "./components/Editor"
import { Preview } from "./components/Preview"
import { Footer } from "./components/Footer"

export default function App() {
    const [code, setCode] = useState(defaultSample)
    const [theme, setTheme] = useState("dark")
    const [titlebar, setTitlebar] = useState(true)
    const [filename, setFilename] = useState("portugol.png")

    const highlighted = useMemo(() => {
        return Prism.highlight(code, Prism.languages.portugol, "portugol")
    }, [code])

    const exportRef = useRef(null)

    return (
        <div className={`app ${theme}`}>
            <Header
                titlebar={titlebar}
                setTitlebar={setTitlebar}
                theme={theme}
                setTheme={setTheme}
                filename={filename}
                setFilename={setFilename}
                onExport={() => downloadPng(exportRef, filename)}
            />
            <main className="grid">
                <Editor code={code} setCode={setCode} />
                <Preview highlighted={highlighted} exportRef={exportRef} titlebar={titlebar} />
            </main>
            <Footer />
        </div>
    )
}
