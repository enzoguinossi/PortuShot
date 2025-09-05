export default function sanitizeFileName(input, fileExtension = ".pg") {
    let fileName = input
    fileName = fileName.split(".")[0]
    fileName = fileName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    fileName = fileName.trim()
    fileName = fileName.replace(/[^a-zA-Z0-9-_]/g, "");
    if (!fileName) fileName = "portugol"

    return  fileName+fileExtension
}