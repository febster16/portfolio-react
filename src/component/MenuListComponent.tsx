import { Heading, Link, useColorModeValue } from "@chakra-ui/react";

interface Props {
    items: string[]
}

export default function MenuListComponent(props: Props): JSX.Element {
    const { items } = props
    return (
        <>
            {items.map((item) => (
                <Heading key={item} paddingX="4" size="sm" as={Link} _hover={{ textDecoration: "none" }} >{item}</Heading>
            ))}
        </>
    )
}