import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import {GameQuery} from "@/App.tsx";

interface GameGridProps {
    gameQuery: GameQuery;
}

function GameGrid({gameQuery}: GameGridProps) {
    const {data, error, isLoading} = useGames(gameQuery);
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    if (error) return <Text>{error}</Text>

    return <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={"10px"} spacing={6}>
        {isLoading && skeleton.map(skeleton => (
            <GameCardContainer key={skeleton}>
                <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
        ))}
        {data.map(game => (
            <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
            </GameCardContainer>
        ))}
    </SimpleGrid>
}

export default GameGrid