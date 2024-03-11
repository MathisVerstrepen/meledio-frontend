export {
    GameMin,
    SortGamesResponse,
    RandomGamesResponse,
    SortCollectionsResponse,
    CollectionMin,
}

declare global {
    interface GameMin {
        id: number;
        name: string;
        cover_id: string;
        cover_hash: string;
    }

    interface Game extends GameMin {
        main_album_id: null | number;
    }

    type SortGamesResponse = Game[];
    type RandomGamesResponse = Game[];

    interface CollectionMin {
        id: number;
        name: string;
        n_games: number;
        avg_rating: number;
        latest_game_release_date: string;
        n_tracks: number;
        games: Game[];
    }

    type SortCollectionsResponse = CollectionMin[];
}