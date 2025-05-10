import useGenres, {Genre} from "@/hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem} from "@chakra-ui/react";
import GenreListSkeleton from "@/components/GenreListSkeleton.tsx";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

function GenreList({onSelectGenre}: Props) {
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
                        <Button onClick={() => onSelectGenre(genre)}
                            variant={"link"}
                            fontSize={"lg"}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    </>
}


export default GenreList;