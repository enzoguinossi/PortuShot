import React, { useEffect, useMemo, useRef, useState } from 'react'
import Prism from './prism-portugol'
import { toPng } from 'html-to-image'

const defaultSample = `algoritmo "Exemplo"
var
   inteiro contador
   real media

inicio
   contador := 0
   leia(media)
   se media >= 7 entao
      escreval("Aprovado!")
   senao
      escreval("Reprovado!")
   fimse

   para contador de 1 ate 3 faca
      escreva("i = ", contador)
   fimpara
fim
`

export default function App() {
    const [code, setCode] = useState(defaultSample)
    const [theme, setTheme] = useState('dark') // 'light' | 'dark'
    const [titlebar, setTitlebar] = useState(true)
    const [filename, setFilename] = useState('portugol.png')

    const highlighted = useMemo(() => {
        return Prism.highlight(code, Prism.languages.portugol, 'portugol')
    }, [code])

    // referência do container a ser exportado
    const exportRef = useRef(null)

    const downloadPng = async () => {
        if (!exportRef.current) return
        const dataUrl = await toPng(exportRef.current, {
            pixelRatio: 2, // mais nítido
            cacheBust: true
        })
        const link = document.createElement('a')
        link.download = filename || 'portugol.png'
        link.href = dataUrl
        link.click()
    }

    // números de linha (simples)
    const lineCount = code.split('\n').length
    const lines = Array.from({ length: lineCount }, (_, i) => i + 1)

    // auto-resize do textarea
    const taRef = useRef(null)
    useEffect(() => {
        if (taRef.current) {
            taRef.current.style.height = 'auto'
            taRef.current.style.height = taRef.current.scrollHeight + 'px'
        }
    }, [code])

    return (
        <div className={`app ${theme}`}>
            <header className="topbar">
                <div className="brand">PortuShot</div>
                <div className="spacer" />
                <label className="toggle">
                    <span>Título da janela</span>
                    <input type="checkbox" checked={titlebar} onChange={e => setTitlebar(e.target.checked)} />
                </label>
                <label className="toggle">
                    <span>Tema</span>
                    <select value={theme} onChange={e => setTheme(e.target.value)}>
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                    </select>
                </label>
                <input
                    className="filename"
                    value={filename}
                    onChange={e => setFilename(e.target.value)}
                    placeholder="nome-do-arquivo.png"
                />
                <button className="primary" onClick={downloadPng}>Exportar PNG</button>
            </header>

            <main className="grid">
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
                            placeholder='Digite seu Portugol aqui...'
                        />
                    </div>
                </section>

                <section className="preview-wrap">
                    <div className="editor-head">Preview</div>
                    <div className="export-box" ref={exportRef}>
                        <div className="preview-outer">
                            {titlebar && (
                                <div className="window-title">
                                    <div className="dots">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <div className="title">portugol.pg</div>
                                    <div style={{ width: 48 }} />
                                </div>
                            )}
                            <pre className="preview">
      <code
          className="language-portugol"
          dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </pre>
                        </div>
                    </div>

                </section>
            </main>

            <footer className="foot">
                Feito com React + Prism + html-to-image — focado em Portugol.
            </footer>
        </div>
    )
}
