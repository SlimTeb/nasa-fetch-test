import classNames from "classnames";

import React from "react";

import SpinnerLogo from "./spinner_standard.svg";

import "./Spinner.less";

type SpinnerProps = {
  className?: string;
};

const defaultProps = {
  className: undefined,
};

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return <SpinnerLogo className={classNames("Spinner", className)} />;
};

Spinner.defaultProps = defaultProps;

export default Spinner;
