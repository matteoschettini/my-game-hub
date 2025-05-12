import {Game} from '../hooks/useGames'
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIcon from "@/components/PlatformIcon.tsx";
import CriticScore from "@/components/CriticScore.tsx";
import getCroppedImageUrl from "@/services/image-url.ts";
import Emoji from "@/components/Emoji.tsx";



interface Props {
    game: Game;
}

function GameCard({game}: Props) {
    return <>
        <Card boxShadow="lg" borderRadius={10} p={4}>
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <HStack marginBottom={3}
                    justifyContent={'space-between'}>
                    <PlatformIcon platforms={game.parent_platforms.map(p => p.platform)}></PlatformIcon>
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
                <Heading fontSize={'2xl'}>{game.name} <Emoji rating={game.rating_top}></Emoji> </Heading>
            </CardBody>
        </Card>
    </>
}

export default GameCard;