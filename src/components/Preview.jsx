import sanitizeFileName from "../utils/sanitizeFileName.js";

export function Preview({ highlighted, exportRef, titlebar, titleText }) {
    return (
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
                            <div className="title">{sanitizeFileName(titleText)}</div>
                            <div style={{ width: 48 }} />
                        </div>
                    )}
                    <pre className="preview">
            <code className="language-portugol" dangerouslySetInnerHTML={{ __html: highlighted }} />
          </pre>
                </div>
            </div>
        </section>
    )
}
