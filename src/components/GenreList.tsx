import useGenres, {Genre} from "@/hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem} from "@chakra-ui/react";
import GenreListSkeleton from "@/components/GenreListSkeleton.tsx";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

function GenreList({onSelectGenre, selectedGenre}: Props) {
    const {data, isLoading, error} = useGenres();
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    if (error) return null;

    return <>
        <Heading fontSize={"2xl"}
                 marginBottom={3}>
            Genres</Heading>
        <List>
            {isLoading && skeleton.map(skeleton => (
                <GenreListSkeleton key={skeleton}></GenreListSkeleton>
            ))}
            {data.map(genre => (
                <ListItem key={genre.id} paddingBottom={"14px"}>
                    <HStack>
                        <Image objectFit={"cover"}
                               src={genre.image_background}
                               boxSize={"32px"}
                               borderRadius={"8px"}></Image>
                        <Button textAlign={"left"}
                                whiteSpace={"normal"}
                                fontWeight={selectedGenre === genre ? "bold" : "normal"}
                                onClick={() => onSelectGenre(genre)}
                                variant={"link"}
                                fontSize={"lg"}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    </>
}


export default GenreList;