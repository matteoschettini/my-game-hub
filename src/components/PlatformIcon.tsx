import {Platform} from "@/hooks/useGames.ts";
import {HStack, Icon} from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaLinux, FaApple, FaAndroid, FaXbox} from 'react-icons/fa'
import {MdPhoneIphone} from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import {BsGlobe} from "react-icons/bs";
import {IconType} from "react-icons";

interface PlatformIconProps {
    platforms: Platform[];
}

function PlatformIcon({ platforms }: PlatformIconProps) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaAndroid,
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        windows: FaWindows,
        apple: FaApple,
        android: FaAndroid,
        nintendo: BsNintendoSwitch,
        web: BsGlobe,
        ios: MdPhoneIphone,
    };

    return (
        <HStack marginY={2}>
            {platforms.map((platform) => (
                <Icon color={"gray.500"} key={platform.id} as={iconMap[platform.slug]} />
            ))}
        </HStack>
    );
}



export default PlatformIcon;