import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Spend to Code</strong>
      </h1>
      <GitHubCalendar
        username="thanuvijay"
        blockSize={15}
        blockMargin={5}
        color="rgba(137, 230, 163, 0.637)"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
