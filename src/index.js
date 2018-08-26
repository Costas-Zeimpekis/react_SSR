// const express = require('express');
// const app = express();
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;

// const Home = require('./client/components/Home').default;
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import createStore from './helpers/createStore';
import renderer from './helpers/renderer';
import proxy from 'express-http-proxy';
const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.header['x-forwarded-host'] = 'localhost:300';
      return opts;
    }
  })
);
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => console.log('Listening to port 3000'));
