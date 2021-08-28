import React, { useState } from 'react';

import { Container, Search, Logo, Wrapper, Carousel, CarouselTitle, Input } from './styles';
import logo from '../../assets/logo.svg';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import restaurante from '../../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />

          <Input
            placeholder="Pesquise"
            value={inputValue}
            onKeyPress={(e) => handleKeyPress(e)}
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
          {/* <button type="button" onClick={() => setModalOpened(true)}>
            Abrir modal
          </button> */}
        </Search>
        <RestaurantCard />
      </Container>
      <Map query={query} />
      {/* <Modal isOpen={modalOpened} onClose={() => setModalOpened(!modalOpened)} /> */}
    </Wrapper>
  );
};

export default Home;
