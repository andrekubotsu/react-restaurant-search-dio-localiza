import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';
import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do restaurante</Title>
        <ReactStars count={5} isHalf edit={false} value={4} size={24} activeColor="#e7711c" />
        <Address>Rua Pedro Vieira da Silva, 595</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurante} alt="Foto do restaurante" />
    </Restaurant>
  );
};

export default RestaurantCard;
