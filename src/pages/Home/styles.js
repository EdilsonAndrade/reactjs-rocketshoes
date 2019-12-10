import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    height: 100%;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 14px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-weight: bold;
      font-size: 18px;
      margin: 10px 0 12px;
    }

    button {
      background: #3c64ad;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.08, '#3c64ad')};
      }
      div {
        display: flex;
        align-items: center;
        padding: 15px;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }
      }

      > span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
