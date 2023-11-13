let init = 0;
export function id() {
    return (++init).toString().padStart(4, '0');
}
