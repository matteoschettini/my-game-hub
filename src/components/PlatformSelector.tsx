import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms.ts";
import {Platform} from "@/hooks/useGames.ts";

interface props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

function PlatformSelector({onSelectPlatform, selectedPlatform}: props) {
    const { data, error } = usePlatforms();

    if (error) return null;

    return <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform ? selectedPlatform.name : "Platforms"}</MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem fontWeight={selectedPlatform === platform ? "bold": "normal"}
                        onClick={() => onSelectPlatform(platform)}
                        key={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    </>
}


export default PlatformSelector;
