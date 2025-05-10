import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Platform} from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import {Genre} from "@/hooks/useGenres.ts";

interface GameGridProps {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

function GameGrid({selectedGenre, selectedPlatform}: GameGridProps) {
    const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    return <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={"10px"} spacing={3}>
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
    </>
}

export default GameGrid