import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server

    return axios.create({
      baseURL: 'http://www.ticket-market-app.xyz', // --> deployment
      // baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local' --> local development
      headers: req.headers,
    });
  } else {
    // we are on the browser

    return axios.create({
      baseURL: '/',
    });
  }
};
