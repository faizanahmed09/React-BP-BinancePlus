/**
 *
 * Loader
 *
 */
import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { Spinner } from 'reactstrap';

export const Loader = () => {

  return (
    <section id="page-loader">
      <div className="loader-container">
        <Spinner animation="border" variant="secondary" />
      </div>
    </section>
  );

}
