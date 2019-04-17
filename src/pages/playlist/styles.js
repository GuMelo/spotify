import styled, { css } from "styled-components";
import { Spinner } from "../../components/Loading/styles";

export const Container = styled.div`
  margin-top: 30px;

  ${Spinner} {
    height: 48px;
  }

  ${props =>
    props.loading &&
    css`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  /* Impede a seleção do conteúdo da página*/
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 220px;
    height: 220px;
  }
  div {
    margin-left: 20px;
  }
  span {
    font-size: 11px;
    letter-spacing: 1.11px;
    font-weight: 300;
  }
  h1 {
    margin-top: 10px;
    font-size: 48px;
  }
  p {
    margin-top: 0;
    color: #b3b3b3;
    font-size: 10px;
    letter-spacing: 1.11px;
    text-transform: uppercase;
  }

  button {
    background: #1db854;
    height: 32px;
    border-radius: 16px;
    color: #fff;
    line-height: 32px;
    padding: 0 35px;
    margin-top: 10px;
    border: 0;
    letter-spacing: 1.11px;
    font-size: 12px;
    text-transform: uppercase;
  }
`;

export const SongList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;

  thead th {
    font-size: 11px;
    color: #b3b3b3;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;

    &:last-child {
      text-align: right;
    }
  }

  tbody td {
    border-top: 1px solid #282828;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;

    &:first-child {
      width: 80px;
      text-align: right;
    }

    &:last-child {
      text-align: right;
    }
  }
`;

export const SongItem = styled.tr`
  td {
    border-top: 1px solid #282828;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;
    background: ${props => (props.selected ? "#282828" : "transparent")};
    color: ${props => (props.playing ? "#1ed760" : "#FFF")};

    &:first-child {
      width: 80px;
      text-align: right;
    }

    &:last-child {
      text-align: right;
    }
  }

  &:hover td {
    background: #282828;
  }
`;
