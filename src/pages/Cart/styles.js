import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 15px 13px;
  border-radius: 4px;
  footer {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    button {
      background: #3c64ad;
      font-weight: bold;
      color: #fff;
      border: none;
      padding: 10px;
      border-radius: 4px;
    }

    div {
      display: flex;
      align-items: baseline;
      span {
        font-size: 10px;
        margin-right: 2px;
      }
      strong {
        font-size: 20px;
      }
    }
  }
`;

export const ProductTable = styled.table`
  margin-top: 80px;
  width: 100%;
  padding: 20px;

  thead tr th {
    color: #999;
    text-align: left;
  }
  tbody {
    img {
      max-width: 100px;
    }

    td {
      > span {
        display: block;
        font-weight: bold;
        font-size: 12px;
      }

      > div {
        display: flex;
        align-items: center;

        svg {
          border: none;
          color: #3c64ad;
          font-size: 15px;
          margin: 0 2px;
          cursor: pointer;
        }
        input {
          background: #fff;
          border: 1px solid #eee;

          padding: 3px;
          max-width: 50px;
        }
      }
    }

    td > svg {
      color: #3c64ad;
      cursor: pointer;
    }
  }
`;
