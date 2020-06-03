import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server

    return axios.create({
<<<<<<< HEAD
      // baseURL: 'http://www.ticket-market-app.xyz', // --> deployment url
      baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local', // --> local development
=======
      baseURL: 'http://www.ticket-market-app.xyz', // --> deployment url
      // baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local', // --> local development
>>>>>>> d37152bdcc24fd7dbfbe63b540575212db2fc826
      headers: req.headers,
    });
  } else {
    // we are on the browser

    return axios.create({
      baseURL: '/',
    });
  }
};
