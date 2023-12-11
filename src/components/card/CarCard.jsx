import React, { useState } from 'react';
import Icon from '../icon/Icon';
import styles from './CarCard.module.css';
import { useDispatch } from 'react-redux';
import { removeFavorite, addFavorite, } from '../../redux/favoritesSlice';
import defImg from '../../assets/images/a10a50d0702711eeb75fe6d39d9a42a4_upscaled.jpg';
import Modal from '../../components/modal/Modal';
import style from './CarCard.module.css';
import ModalIcon from '../../components/modal/ModalIcon';

const DividerSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
    <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1"/>
  </svg>
);

const getAddressParts = (address) => {
  const addressParts = address.split(',');
  const city = addressParts[1] ? addressParts[1].trim() : '';
  const country = addressParts[2] ? addressParts[2].trim() : '';
  return { city, country };
};

const CarCard = ({ car }) => {
  const { city, country } = getAddressParts(car.address);
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [isButtonClicked, setIsButtonClicked] = useState(
    () => localStorage.getItem(`favorite-${car.id}`) === 'true'
  );

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
    localStorage.setItem(`favorite-${car.id}`, String(!isButtonClicked));

    if (isButtonClicked) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const handleLearnMoreClick = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.card} ${styles.customCard}`}>
        {car.img && !imageError ? (
          <>
            <img
              src={car.img}
              alt={car.model}
              className={styles.img}
              onError={handleImageError}
            />
          </>
        ) : (
          <div className={styles.placeholder}>
            {imageError ? (
              'Failed to load image'
            ) : (
              <img
                src={defImg}
                alt="Default"
                className={styles.defaultImg}
              />
            )}
          </div>
        )}
        <div className={styles.iconWrap}>
          <button
            type="button"
            className={`${styles.icon} ${isButtonClicked ? styles.blueIcon : ''}`}
            onClick={handleButtonClick}
          >
            <Icon fill={isButtonClicked ? '#3470ff' : 'none'} stroke={isButtonClicked ? '#3470ff' : '#fff'} />
          </button>
        </div>
        <div className={styles.cardContent}>
          <h2 className={styles.txt} variant="h5" component="div">
            {car.make} {car.model} {car.rentalPrice}
          </h2>
          <p className={styles.minidescr} color="text.secondary">
            {city} <DividerSvg /> {country} <DividerSvg /> {car.rentalCompany} <DividerSvg /> {car.type} <DividerSvg /> {car.model} <DividerSvg /> {car.id} <DividerSvg /> {car.functionalities[0]}
          </p>
        </div>
        <div>
          <button type='button' className={style.btn} onClick={handleLearnMoreClick}>
            Learn more
          </button>
          {showModal && <Modal car={car} onClose={closeModal} />}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
