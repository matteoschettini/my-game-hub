import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "@/components/ColorModeSwitch.tsx";
import SearchInput from "@/components/SearchInput.tsx";

interface Props {
    onSearch: (value: string) => void;
}

function NavBar({onSearch}: Props) {
    return <>
        <HStack
                padding={"10px"}>
            <Image src={logo} boxSize={"60px"}></Image>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    </>
}


export default NavBar;