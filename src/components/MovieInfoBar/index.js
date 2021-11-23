import React from "react";
import PropTypes from "prop-types";
import { calcTime, convertMoney } from "../../helpers";

import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ revenue, time, budget }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Running Time: {calcTime(time)}</p>
      </div>

      <div className="column">
        <p>Budget: {convertMoney(budget)}</p>
      </div>

      <div className="column">
        <p>Running Time: {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

MovieInfoBar.propTypes = {
  revenue: PropTypes.number,
  time: PropTypes.number,
  budget: PropTypes.number,
};
export default MovieInfoBar;
