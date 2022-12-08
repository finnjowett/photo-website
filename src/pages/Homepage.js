import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  const auth = "563492ad6f91700001000001b356ec47773c4b17a1f525520c20740a";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

  // fetch data from pexels api
  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
  };

  // fetch data when the page loads up
  useEffect(() => {
    search(initialURL);
  }, []);

  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=1&per_page=15`;
  return (
    <div>
      <Search search={() => search(searchURL)} setInput={setInput} />
      <div className="pictures">
        {data && data.map((d) => <Picture photo={d} />)}
      </div>
    </div>
  );
};

export default Homepage;
