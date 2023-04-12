interface Vector {
    elts: [string, number, number, number, number]
    mutable: boolean
}

interface ColoredPart {
    text: string
    location: Vector
}

interface Message {
    args: [ColoredPart, string]
}

interface ContinuationMarkSet {
    dict: unknown
}

interface aStruct {
    _constructorName: string
    _fields: [Message, ContinuationMarkSet]
}

interface SchemeError {
    val: aStruct
}

export default SchemeError