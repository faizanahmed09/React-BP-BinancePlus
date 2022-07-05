/**
 *
 * About
 *
 */
import React, { useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Container } from 'reactstrap';
import { Loader } from '../loader/loader';


export const Error = () => {
  const[load, setLoad] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {setLoad(false)}, 2000);
  }, []);

  return (
    <>
    {load ?(
      <Loader/>
    ):(
      <section id="page-not-found">
      <Container fluid="xl">
        <div className="outer">
          <div className="inner">
            <h1>404</h1>
            <p>Ooops!...Page not found.</p>
            <Link to='/'>Back to Home</Link>
          </div>
        </div>
      </Container>
    </section>
    )}
    </>
  );

}
