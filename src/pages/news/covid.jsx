import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Helmet } from 'react-helmet';
Covid.propTypes = {};
function Covid(props) {
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [searchParam, setSearchParam] = useState('');
  //   const [drinks, setDrinks] = useState([]);
  //   const handleGetDrinks = () => {
  //     setIsLoading(true);
  //     axios
  //       .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`)
  //       .then((drinkList) => {
  //         setDrinks(drinkList.data.drinks);
  //         setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setIsLoading(false);
  //       });
  //   };

  //   useEffect(() => {
  //     handleGetDrinks();
  //   }, []);
  const { drinks } = props;
  return (
    <div>
      <Helmet>
        <title>vinh</title>
        <meta name="vinh" content="vinh" />
      </Helmet>
      <div>
        {/* helmet đè thẻ chứ không đè thuọc tính
    nếu config title thì nó sẽ đè tát cả,giống th cha */}
        <Helmet>
          {/* <title>truong</title> */}
          <meta name="truong" content="truong" />
        </Helmet>
        {drinks?.map((drink) => {
          return <div key={drink.idDrink}>{drink.strDrink}</div>;
        })}
      </div>
    </div>
  );
}

Covid.getInitialProps = async ({ store, route, isServer, req, location }) => {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('vinh');
  const res = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`,
  );
  const json = await res.data.drinks;
  return { drinks: json };
};
export default Covid;
