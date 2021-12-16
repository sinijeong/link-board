import styled from 'styled-components';
import {
  StackDefault as Stack,
  CanvasWrapper as Canvas,
  ListsWrapper as Lists,
  ListDefault as List,
  ListInnerDefault as ListInner,
  CardWrapper as Card,
  InputWrapper as Input,
} from '../../components';

export const Board = () => {
  const onDragEnd = () => {};

  return (
    <Wrapper axis='column'>
      <Header axis='column' spacing='medium'>
        <Input theme='title1' placeholder='Links board' />
      </Header>
      <Canvas onDragEnd={onDragEnd}>
        <Lists List={List} ListInner={ListInner} Card={Card} />
      </Canvas>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  background: ${(p) => p.theme.palette['grey0']};
  display: flex;
  flex-direction: column;
`;

const Header = styled(Stack)`
  height: 6.4rem;
`;
