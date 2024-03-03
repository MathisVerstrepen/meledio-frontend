export {
    SortGames,
    SortGamesResponse,
}

declare global {
    interface SortGames {
        id: number;
        name: string;
        cover_id: string;
        cover_hash: string;
        main_album_id: null | number;
    }

    type SortGamesResponse = SortGames[];
}