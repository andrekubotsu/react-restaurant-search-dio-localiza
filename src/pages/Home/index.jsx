import React, { useState } from 'react';
import '@material/mwc-textfield';
import '@material/mwc-icon';
import { Container, Search, Logo, Wrapper, Map, Carousel, CarouselTitle } from './styles';
import logo from '../../assets/logo.svg';
import { Card } from '../../components';

import restaurante from '../../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <mwc-textfield
            label="Pesquisar restaurantes"
            // type="search"
            helper="Digite o nome do restaurante"
            iconTrailing="search"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          {/* <TextField
          label="Pesquisar"
          helperText={<HelperText>Digite o nome do restaurante</HelperText>}
          outlined
          // onTrailingIconSelect={() => this.setState({ value: '' })}
          // trailingIcon={<MaterialIcon role="button" icon="delete" />}
        >
          <Input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </TextField> */}
          <CarouselTitle>Na sua área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
          </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
