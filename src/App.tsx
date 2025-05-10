import {Grid, GridItem, HStack, Show} from "@chakra-ui/react"
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import {Genre} from "@/hooks/useGenres.ts";
import {useState} from "react";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import {Platform} from "@/hooks/useGames.ts";
import SortSelector from "@/components/SortSelector.tsx";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
            <Grid templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr"
            }}>
                <GridItem area={'nav'}>
                    <NavBar></NavBar>
                </GridItem>
                <Show above={'lg'}>
                    <GridItem paddingX={5} area={'aside'}>
                        <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
                                   selectedGenre={gameQuery.genre}
                                    />
                    </GridItem>
                </Show>
                <GridItem area={'main'}>
                    <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                        <PlatformSelector selectedPlatform={gameQuery.platform}
                                          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}></PlatformSelector>
                        <SortSelector />
                    </HStack>
                    <GameGrid gameQuery={gameQuery}
                    ></GameGrid>
                </GridItem>
            </Grid>
    )
}

export default App
