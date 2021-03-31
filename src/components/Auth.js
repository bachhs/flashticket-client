import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { logout, setUserData } from 'src/redux/actions/accountActions';
import authService from 'src/services/authService';

import LoadingScreen from './LoadingScreen';

function Auth({ children }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      authService.setAxiosInterceptors({
        onLogout: () => dispatch(logout())
      });

      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        try {
          const user = await authService.loginWithToken();

          await dispatch(setUserData(user));
        } catch {
          authService.setSession(null);
        }
      }
      setLoading(false);
    };
    initAuth();
  }, [dispatch]);

  if (loading) {
    return <LoadingScreen />;
  }

  return children;
}

Auth.propTypes = {
  children: PropTypes.node
};

export default Auth;
