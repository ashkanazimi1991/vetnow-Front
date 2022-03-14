import React, { Component } from "react";
import EducationPage from "../../components/news/educationPage/EducationPage";

import Layout from '../../components/news/Layout'
export default class Index extends Component {
  render() {
    return (
      <>
      <Layout>
        <EducationPage/>
      </Layout>
      </>
    );
  }
}
