import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Container, HeaderContainer, Content, InputContainer } from './styles';
import { ButtonIcon } from '@components/ButtonIcon';

export function AddMembers() {
  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton />

        <Highlight
          title='Equipes 1'
          subtitle='Adicione os titulares e reservas'
        />
      </HeaderContainer>

      <Content>
        <InputContainer>
          <Input
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            placeholder='Adicione uma equipe'
          />

          <ButtonIcon 
           style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            icon='add-circle-outline' 
          />
        </InputContainer>

        <Button
          title='Deletar equipe'
          type='SECONDARY'
        />
      </Content>
    </Container>
  );
}