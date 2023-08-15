interface File {
    languageId: number
    fileName: string,
    sourceCode: string
}

interface Files extends Array<File> {}

export default Files
