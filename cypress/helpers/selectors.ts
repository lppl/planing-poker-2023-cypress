const enum SchemaType {
    Room = '/schemas/poker-room.yml',
    Table = '/schemas/poker-table.yml',
    User = '/schemas/user-player.yml',
}

function tid(testId: string) {
    return `[data-test-id="${testId}"]`;
}

function itemscopeByType(type: SchemaType): string {
    return `[itemscope][itemtype="${type}"]`;
}

function itemprop(prop: string): string {
    return `[itemprop="${prop}"]`;
}

export { SchemaType, itemscopeByType, itemprop, tid };
