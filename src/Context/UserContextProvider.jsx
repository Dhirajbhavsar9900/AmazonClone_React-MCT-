import { useState } from 'react';
import PropTypes from 'prop-types'; // prop-types library import karo
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <UserContext.Provider value={{ user, setUser, cart, addToCart }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // children prop ko validate karo
};

export default UserContextProvider;
