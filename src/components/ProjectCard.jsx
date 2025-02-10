import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} md={8} sm={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
