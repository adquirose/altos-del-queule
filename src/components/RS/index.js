import React from "react";
import { Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RS = () => {
  return (
    <div className="fixed-bottom icon icon-success">
      <Row className="float-right">
        <Col sm="12" className="text-center pb-2">
          <a target="blank" href="https://wa.me/56989295165">
            <Button className="btn-just-icon" color="whatsapp">
              <FontAwesomeIcon
                icon={["fab", "whatsapp"]}
                size="3x"
                color="white"
              />
            </Button>
          </a>
        </Col>
        <Col sm="12" className="text-center pb-2">
            <a target="blank" href="https://ul.waze.com/ul?place=ChIJ336GYsWBE5YRMGmvl_9r7d0&amp;ll=-39.27529700%2C-71.94110180&amp;navigate=yes">
            <Button className="btn-just-icon" color="waze">
              <FontAwesomeIcon icon={["fab", "waze"]} size="3x" color="white" />
            </Button>
          </a>
        </Col>
      </Row>
    </div>
  );
};
export default RS;
