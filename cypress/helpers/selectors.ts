const enum SchemaType {
    Room = '/schemas/poker-room.yml',
}

const enum Role {
    CreatePokerRoom = 'createPokerRoom',
}

function dataTestId(testId: string) {
    return `[data-test-id="${testId}"]`;
}

function role(role: Role): string {
    return `[role=${role}]`;
}

function itemscopeByType(type: SchemaType): string {
    return `[itemscope][itemtype="${type}"]`;
}

function itemprop(prop: string): string {
    return `[itemprop="${prop}"]`;
}

export { SchemaType, Role, itemscopeByType, itemprop, role, dataTestId };
