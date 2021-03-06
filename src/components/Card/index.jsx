import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Star } from '../StarRating';
import './styles.css';

const Cards = ({ thumb, title, category, price, title2, price2, thumb2, category2 }) => {
  return (
    <>
      <Row>
        <Col xs={6} className="card_wrapper">
          <div className="card_body">
            <a className="d-block img_link" href="/" target="_blank">
              <img src={thumb} alt="theme thumbnail" className="card_image" />
            </a>
            <button type="button" className="card_preview_btn">
              Live preview
            </button>
          </div>
          <div className="card_footer d-md-block d-lg-flex justify-content-lg-between align-content-lg-center">
            <div className="card_footer_item">
              <a className="d-block card_link" href="/" target="_blank">
                {title}
              </a>
              <a className="d-block card_link _link" href="/" target="_blank">
                {category}
              </a>
            </div>
            <div>
              <p>{price}</p>
              <Star />
            </div>
          </div>
        </Col>
        <Col xs={6} className="card_wrapper">
          <div className="card_body">
            <a className="d-block img_link" href="./index.jsx" target="_blank">
              <img src={thumb2} alt="theme thumbnail" className="card_image" />
            </a>
            <button type="button" className="card_preview_btn">
              Live preview
            </button>
          </div>
          <div className="card_footer d-md-block d-lg-flex justify-content-lg-between align-content-lg-center">
            <div className="card_footer_item">
              <a className="d-block card_link" href="/" target="_blank">
                {title2}
              </a>
              <a className="d-block card_link _link" href="/" target="_blank">
                {category2}
              </a>
            </div>
            <div>
              <p>{price2}</p>
              <Star />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cards;
