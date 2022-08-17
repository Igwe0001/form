import React from "react";
import Form from "./Form";
import Text from "./Text";

const Container = () => {
  return (
    <div className="my-16 w-11/12 md:flex md:my-0 md:justify-between md:items-center max-width">
      <Text />
      <Form />
    </div>
  );
};

export default Container;
