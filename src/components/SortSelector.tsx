import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Props {
    onSelectedSorting: (sortOrder: string) => void;
    sortOrder: string;
}

function SortSelector({onSelectedSorting, sortOrder}: Props) {

    const sortOrders = [
        {value: "", label: "Relevance"},
        {value: "-added", label: "Date added"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release date"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average rating"},
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);


    return <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {currentSortOrder?.label || "Relevance"}</MenuButton>
            <MenuList>
                {sortOrders.map((sort) => (
                    <MenuItem onClick={() => onSelectedSorting(sort.value)}
                        key={sort.value}
                        value={sort.value}>
                        {sort.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    </>
}


export default SortSelector;
