import { useEffect } from "react";
import openai from "../genAI";

const useOpenAI = (prompt) => {
  const fetchResults = async () => {
    console.log(prompt);

    // const response = await openai.responses.create({
    //   model: "gpt-6-luna",
    //   input: { prompt },
    //   store: true,
    // });

    // // response.then((result) => console.log(result.output_text));
    // console.log(response.output_text);
  };

  useEffect(() => {
    fetchResults();
  }, []);
};

export default useOpenAI;

