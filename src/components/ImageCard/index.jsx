import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Skeleton } from '../index';

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  cursor: pointer;
  transition: 300ms;

  :hover {
    opacity: 0.8;
  }
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fff;
  font-size: 16px;
  margin: 30px;
  margin-top: 10px;
  margin-right: 10px;
`;

const ImageCard = ({ photo, title, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo} onClick={onClick}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="100px" height="100px" />
      )}
    </>
  );
};

export default ImageCard;
