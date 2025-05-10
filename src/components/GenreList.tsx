import useGenres from "@/hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import GenreListSkeleton from "@/components/GenreListSkeleton.tsx";



function GenreList() {
    const {data, isLoading, error} = useGenres();
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    if (error) return null;

    return <>
        <List>
            {isLoading && skeleton.map(skeleton => (
                <GenreListSkeleton key={skeleton}></GenreListSkeleton>
            ))}
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