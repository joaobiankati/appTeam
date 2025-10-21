import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Container, HeaderContainer, Content } from './styles';

export function AddMembers() {
  return (
    <Container>
      <HeaderContainer>
        <Header />

        <Highlight
          title='Equipes'
          subtitle='Preparem suas equipes'
        />
      </HeaderContainer>

      <Content>
        <Input
          placeholder='Adicione um membro'
        />

        <Button
          title='Deletar equipe'
          type='SECONDARY'
        />
      </Content>
    </Container>
  );
}