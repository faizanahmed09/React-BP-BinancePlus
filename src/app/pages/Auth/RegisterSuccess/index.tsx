/**
 *
 * RegisterSuccess
 *
 */
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { Row, Col, Container, InputGroup, Input } from 'reactstrap';
import loginimg from 'assets/loginimg.png';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useHistory, useLocation } from 'react-router-dom';
import { endpoints } from 'config/API';
import { request } from '../../../../utils/request'
import { toast, ToastContainer } from 'react-toastify';

export function RegisterSuccess() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const history=useHistory();

   const location = useLocation();
  const email=location.state;
  const [isDisable,setIsDisable]=useState(false);
  const [key, setKey] = useState(0);
  

  const resendEmail=async ()=>{
    setIsDisable(true);
    setKey(prevKey => prevKey + 1)
    
    var config = {
                method: 'post',
                url: endpoints.resendEmail+email,
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + token
                },
                
            };
            try {
                const retRegister = await request(config);
                toast.success("Email Send, Check inbox", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                

            } catch (err: any) {
                let er = (err.response.data.message);
                toast.error(er, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
              
            }
  }




  return (
    <div className="form-page">
      <Container>
        <Row className='reverse'>
          <Col xl={12}>
            <div className="form-container">
              <div className="success-header">
                <h1 >Success</h1>
                <p className='reg-success'>We have succsefuly created your new account. But before you start you will have to activate it.
                  We have sent an activation mail to the email you provided during registration.
                  It should arrive in a couple of minutes
                </p>
                <p className='reg-success'>If the email has not arrived during 30s you can still click the button below to resend it.
                  We guarantee it will come this time!
                </p>
                <div className='reg-success-timer'>
                  <CountdownCircleTimer
                    key={key}
                    isPlaying
                    duration={30}
                    colors={['#F2B80E', '#F2B80E', '#FF0000', '#FF0000']}
                    colorsTime={[20, 15, 10, 0]}
                    size={60}
                    strokeWidth={3}
                  >
                    {({ remainingTime }) => remainingTime + 's'}
                    
                  </CountdownCircleTimer>
                </div>

                <a>Re-send the verification email</a>
                {/* <button onClick={()=> history.push('login')}>Login</button> */}
                <button onClick={resendEmail} disabled={isDisable}>Resend Email</button>
              </div>
            </div>
          </Col>
          <Col xl={12}>
            <div className="success-img">
              <div className="success-in">
                <img src={loginimg} width="100%" height="100%" alt="success" />
              </div>
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}
