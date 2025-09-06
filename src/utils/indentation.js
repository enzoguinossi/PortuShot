export function indentText(text, start, end, shiftKey) {
    const lines = text.split("\n")
    let selStartLine = text.slice(0, start).split("\n").length - 1
    let selEndLine = text.slice(0, end).split("\n").length - 1

    for (let i = selStartLine; i <= selEndLine; i++) {
        if (shiftKey) {
            // Desidentar (Shift+Tab)
            if (lines[i].startsWith("\t")) {
                lines[i] = lines[i].slice(1)
            }
        } else {
            // Identar (Tab)
            lines[i] = "\t" + lines[i]
        }
    }

    return lines.join("\n")
}
