import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, details, image_url, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image
            src={author.img}
            style={{ height: "60px" }}
            roundedCircle
            className="me-3"
          ></Image>
          <div>
            <p className="m-0">{author.name}</p>
            <p className="m-0">{author.published_date}</p>
          </div>
        </div>
        <div>
          <FaBookmark className="me-2"></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} className="my-3" />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + " ... "}
              <Link to={`/news/${_id}`}>more</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaStar className="text-warning"></FaStar>
            <span className="ms-2">{rating?.number}</span>
          </div>
          <div className="d-flex align-items-center">
            <FaEye></FaEye>
            <span className="ms-2">{total_view}</span>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
