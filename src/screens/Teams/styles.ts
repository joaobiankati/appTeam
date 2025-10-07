import { View, Text, StyleSheet, Image} from "react-native"

import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;

    color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text``;