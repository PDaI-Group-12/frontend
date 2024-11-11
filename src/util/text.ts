export function toPascalCase(value: string): string {
    return value.replace(/\w+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
}