import { Container, Content, HeaderCotainer } from "./styles"
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { TeamCard } from "@components/TeamCard";
 
export function Teams(){
    return(
        <Container>
            <HeaderCotainer>
                <Header />

                <Highlight 
                title="Equipes"
                subtitle="Preparem suas equipes"
                /> 
            </HeaderCotainer>

            <Content>
                <TeamCard />
                <TeamCard />
            </Content>
        </Container>
    )
}