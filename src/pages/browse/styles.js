import styled from "styled-components";
import { Link } from "react-router-dom";

import { Spinner } from "../../components/Loading/styles";

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;

  /* Impede a seleção do conteúdo da página*/
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #fff;

  ${Spinner} {
    height: 24px;
    margin-top: 5px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;

  img {
    height: 250px;
  }
  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }
  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }

  &:hover img {
    opacity: 0.4;
    transition: all 0.2s;
  }

  &:first-child {
    margin: 0;
  }
`;
