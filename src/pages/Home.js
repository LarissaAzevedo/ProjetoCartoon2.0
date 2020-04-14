import React, { Component } from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import GridCartoons from '../components/GridCartoons/gridCartoons';

export default class Home extends Component {
  render() {
    return (
      <>
      Homepage
        <Header />
        <GridCartoons />
        <Footer />
      </>
    );
  }
}
