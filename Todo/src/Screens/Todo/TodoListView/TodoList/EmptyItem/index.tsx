import React, {useContext} from "react";
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex :1;
    justify-content:center;
    align-items: center;
`;

const Label = Styled.Text``;

interface Props {}

const EmptyItem = ({ } : Props)=> {
    return(
        <Container>
            <Label>하단에 + 버튼을 눌러 할일 등록한다.</Label>
        </Container>
    );
};
export default EmptyItem;