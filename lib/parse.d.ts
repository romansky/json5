/**
 * Parses a JSON5 string, constructing the JavaScript value or object described
 * by the string.
 * @template T The type of the return value.
 * @param text The string to parse as JSON5.
 * @param reviver A function that prescribes how the value originally produced
 * by parsing is transformed before being returned.
 * @param healer A function that can heal a parsing error by catching it, inspecting the error
 * and if value is returned then healing result with provided mutation
 * @returns The JavaScript value converted from the JSON5 string.
 */
declare function parse<T = any>(
    text: string,
    reviver?: ((this: any, key: string, value: any) => any | undefined) | null,
    healer?: ((error: Error, stack: any[], root: any) => any) | null,
): T

export = parse
