export {
    GameMin,
    SortGames,
    SortGamesResponse,
}

declare global {
    interface GameMin {
        id: number;
        name: string;
        cover_id: string;
        cover_hash: string;
    }

    interface SortGames extends GameMin {
        main_album_id: null | number;
    }

    type SortGamesResponse = SortGames[];
}