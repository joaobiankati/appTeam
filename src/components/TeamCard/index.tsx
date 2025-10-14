import { Text } from "react-native";
import { Container, Icon, Title } from "./styles";
import {MaterialIcons} from "@expo/vector-icons"

export function TeamCard(){
    return (
        <Container>
            <Icon name="groups" />

            <Title>Equipe 1</Title>
        </Container>
    )
}