import React, { useState, useEffect } from "react";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import Text from "./Text";
import axios from "axios";

const Content = () => {
  const [state, setState] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const loadText = async () => {
      const response = await axios.get(
        "https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1"
      );
      const data = response.data.texts;
      console.log(data[0]["description"]);
      setState(data);
      setNumber(data.length);
    };

    loadText();
  }, []);

  return (
    <ScrollContainer>
      {number > 0 &&
        state.map((item, index) => (
          <ScrollPage>
            <Text item={item} key={index} />
          </ScrollPage>
        ))}
    </ScrollContainer>
  );
};

export default Content;
