import {TokenPayload} from "./types.ts";

export function toPascalCase(value: string): string {
    return value.replace(/\w+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
}

export function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

export const decodeToken = (token: string): TokenPayload | undefined => {
    try {
        return JSON.parse(atob(token.split(".")[1])) as TokenPayload
    } catch {
        return undefined
    }
}