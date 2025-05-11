import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";


interface SearchInputProps {
    onSearch: (value: string) => void;
}


function SearchInput({onSearch}: SearchInputProps) {
    const ref = useRef<HTMLInputElement>(null);

    return <>
        <form style={{width: "100%"}} onSubmit={(e) => {
            e.preventDefault()
            if (ref.current) onSearch(ref.current.value)
        }}>
            <InputGroup>
                <InputLeftElement>
                    <BsSearch></BsSearch>
                </InputLeftElement>
                <Input ref={ref} borderRadius={20} placeholder={"Search games..."} variant={"filled"}></Input>
            </InputGroup>
        </form>
    </>
}

export default SearchInput;