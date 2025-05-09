import {Badge} from "@chakra-ui/react";

interface CriticScoreProps {
    score: number;
}

function CriticScore({score}: CriticScoreProps) {
    const color = score > 60 ? "green" : "red";

    return (
        <Badge colorScheme={color} fontSize={"14px"} paddingX={2} borderRadius={"4px"}>{score}</Badge>
    )
}

export default CriticScore;
