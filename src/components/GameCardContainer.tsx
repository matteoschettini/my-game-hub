import {Box} from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

function GameCardContainer({children}: Props) {
    return <>
        <Box borderRadius={10} overflow="auto">
            {children}
        </Box>
    </>
}

export default GameCardContainer;