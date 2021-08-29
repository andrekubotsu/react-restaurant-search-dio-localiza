/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Search,
  Logo,
  Wrapper,
  Carousel,
  CarouselTitle,
  Input,
  ModalTitle,
  ModalContent,
} from './styles';
import logo from '../../assets/logo.svg';
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';

import restaurante from '../../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
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

          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua área</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            key={restaurant.name}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal isOpen={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {/* //TODO: change this make it ux */}
              {restaurantSelected?.opening_hours?.open_now
                ? 'Aberto agora :-)'
                : 'Fechado neste momento :-('}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
