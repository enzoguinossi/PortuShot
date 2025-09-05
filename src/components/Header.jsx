export function Header({ titlebar, setTitlebar, titleText, setTitleText, theme, setTheme, filename, setFilename, onExport }) {

    return (
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
            {(titlebar && <input
                className="filename"
                value={titleText}
                onChange={e => setTitleText(e.target.value)}
                placeholder="portugol.pg"
            />)}
            <input
                className="filename"
                value={filename}
                onChange={e => setFilename(e.target.value)}
                placeholder="nome-do-arquivo.png"
            />
            <button className="primary" onClick={onExport}>Exportar PNG</button>
        </header>
    )
}
