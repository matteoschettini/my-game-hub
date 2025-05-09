import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";
import {CanceledError} from "axios";

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
}


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
            .then(data => setGames(data.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            })

        return () => controller.abort()
    }, [])

    return {games, error};
}

export default useGames;