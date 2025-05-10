import { HStack, List, ListItem, Skeleton, SkeletonText} from "@chakra-ui/react";

function GenreListSkeleton() {
    return <>
        <List>
            <ListItem paddingBottom={"14px"}>
                <HStack>
                    <Skeleton boxSize={"32px"}/>
                    <SkeletonText width={100}/>
                </HStack>
            </ListItem>
        </List>
    </>
}


export default GenreListSkeleton;