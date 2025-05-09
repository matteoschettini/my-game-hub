import {Game} from '../hooks/useGames'
import {Card, CardBody, Heading, Image} from "@chakra-ui/react";
import PlatformIcon from "@/components/PlatformIcon.tsx";



interface Props {
    game: Game;
}

function GameCard({game}: Props) {
    return <>
        <Card borderRadius={10} overflow="auto">
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <PlatformIcon platforms={game.parent_platforms.map(p => p.platform)}></PlatformIcon>
            </CardBody>
        </Card>
    </>
}

export default GameCard;