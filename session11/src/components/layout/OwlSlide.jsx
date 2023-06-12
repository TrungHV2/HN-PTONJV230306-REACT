import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductItem from '../models/ProductItem';

export default function OwlSlide({options, items, classItem, className}) {
  return (
    <>
      <OwlCarousel className={className} {...options}>
        {items.map(x => <ProductItem key={x.id} product={x} classItem={classItem} />)}
      </OwlCarousel>
    </>
  )
}
