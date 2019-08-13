export interface ICards {
    cardId: number;
    cardName: string;
    image: string;
    basePoints: number;
    type: string;
    specialType?: string;
    specialPoints?: number;
    nonPlayer?: boolean;
}

export const cards: Array<ICards> = [
    {
        cardId: 10,
        cardName: 'weather',
        image: 'assets/img/rain.jpeg',
        basePoints: 0,
        type: 'siege',
        specialType: 'siegeSpecial',
        nonPlayer: true
    },
    {
        cardId: 10,
        cardName: 'weather',
        image: 'assets/img/cold.png',
        basePoints: 0,
        type: 'war',
        specialType: 'warSpecial',
        nonPlayer: true
    },
    {
        cardId: 18,
        cardName: 'Geralt',
        image: 'assets/img/geralt.png',
        basePoints: 10,
        type: 'war',
        specialType: 'gold'
    },
    {
        cardId: 1,
        cardName: 'Roshe',
        image: 'assets/img/roshe.jpeg',
        basePoints: 10,
        type: 'war',
        specialType: 'gold'
    },
    {
        cardId: 2,
        cardName: 'catapult',
        image: 'assets/img/cat.jpeg',
        basePoints: 5,
        type: 'siege',
        specialType: 'hill'
    },
    {
        cardId: 3,
        cardName: 'everyk',
        image: 'assets/img/everyk.jpeg',
        basePoints: 5,
        type: 'far'
    },
    {
        cardId: 4,
        cardName: 'dickstra',
        image: 'assets/img/dickstra.jpeg',
        basePoints: 4,
        type: 'war',
        specialType: 'spy'
    },
];
