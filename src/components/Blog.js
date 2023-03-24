import React from "react";

function Blog() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(
      "Data.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        console.log(response);

        return response.json();
      })

      .then(function (myJson) {
        console.log(myJson);

        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="blog" id="blog">
      Blog
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <>
            <p>{item.quote}</p>
            <p>{item.author}</p>
          </>
        ))}
    </section>
  );
}

export default Blog;
