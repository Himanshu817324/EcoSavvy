// CardSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './CardSlider.css';

const CardSlider = () => {
  const users = [
    {
      id: 1,
      name: 'James Wilson',
      profession: 'Software Developer',
      image: 'images/img-1.jpg',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      profession: 'Graphic Designer',
      image: 'images/img-2.jpg',
    },
    {
      id: 3,
      name: 'Michael Brown',
      profession: 'Project Manager',
      image: 'images/img-3.jpg',
    },
    {
      id: 4,
      name: 'Emily Davis',
      profession: 'Marketing Specialist',
      image: 'images/img-4.jpg',
    },
    {
      id: 5,
      name: 'Christopher Garcia',
      profession: 'Data Scientist',
      image: 'images/img-5.jpg',
    },
    {
      id: 6,
      name: 'Richard Wilson',
      profession: 'Product Designer',
      image: 'images/img-6.jpg',
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
      {users.map((user) => (
        <SwiperSlide key={user.id}>
          <div className="card-item">
            <img src={user.image} alt="User  Image" className="user-image" />
            <h2 className="user-name">{user.name}</h2>
            <p className="user-profession">{user.profession}</p>
            <button className="message-button">Message</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;