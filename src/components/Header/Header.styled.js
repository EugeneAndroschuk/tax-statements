import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
background-color: black;
overflow: hidden;
`;

export const HeaderWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const LinkStyled = styled(Link)`
color: white;
`;