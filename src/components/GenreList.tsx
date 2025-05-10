import useGenres from "@/hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";


function GenreList() {
    const {data} = useGenres();

    return <>
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} paddingBottom={"14px"}>
                    <HStack>
                        <Image src={genre.image_background}
                               boxSize={"32px"}
                               borderRadius={"8px"}></Image>
                        <Text fontSize={"lg"}>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    </>
}


export default GenreList;