import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Logo = styled.img`
  width: 50%;
  margin-bottom: 15px;
`;

export const Map = styled.div`
  background-color: red;
  width: 120px;
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid;
  padding: 16px;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;

  :focus {
    outline: none;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  text-transform: none;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  text-transform: none;
  line-height: 29px;
  font-size: 16px;
  font-weight: normal;
`;
