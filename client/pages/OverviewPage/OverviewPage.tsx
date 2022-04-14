import React from "react";

import imagesService from "../../services/imagesService";

const OverviewPage = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    imagesService
      .getNasaImages()
      .then((res) => {
        setItems(res.collection.items);
      })
      .catch((e) => console.log(e));
  }, []);

  return <div>hallo</div>;
};

export default OverviewPage;
