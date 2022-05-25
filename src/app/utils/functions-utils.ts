export function isNotNullUndefinedEmpty(text: string | undefined): boolean {
    return text !== null && text !== undefined && text.length !== 0;
}
