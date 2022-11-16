

export type ItemsSquare = any[]

export type ItemLinePlayField = ItemsSquare[];

export const data: ItemLinePlayField = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

export const figureS: ItemLinePlayField = [
    [0, 1, 1],
    [1, 1, 0]
];
export const figureZ: ItemLinePlayField = [
    [1, 1, 0],
    [0, 1, 1]
];
export const figureT: ItemLinePlayField = [
    [1, 1, 1],
    [0,1,0]
]
export const figureO: ItemLinePlayField = [
    [1, 1],
    [1, 1]
];
export const figureI: ItemLinePlayField = [
    [1, 1, 1],
    [0, 0, 0]
];
export const figureJ: ItemLinePlayField = [
    [0, 0, 1],
    [1, 1, 1]
];
export const figureL: ItemLinePlayField = [
    [1, 0, 0],
    [1, 1, 1]
];
export const arr = [figureI, figureJ, figureL, figureO, figureS, figureT, figureZ];