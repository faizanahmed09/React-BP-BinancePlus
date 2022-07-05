import React, { useState, useCallback, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuth, selectAuthUser, selectError,
} from 'app/redux/Auth/slice/selectors';
import { useAuthSlice } from "../../../redux/Auth/slice";
import { Row, Col, Container, InputGroup, Input } from 'reactstrap';
import ReCAPTCHA from "react-google-recaptcha";
import loginimg from 'assets/loginimg.png';
import user from 'assets/email.png';
import key from 'assets/key.png';
import ShowPassword from '../../../../assets/show.png'
import HidePassword from '../../../../assets/view.png'
import { toast, ToastContainer } from 'react-toastify';

export const Login = () => {
  const { actions } = useAuthSlice();
  const history=useHistory();
  const accessToken = useSelector(selectAuth);
  const userAuth = useSelector(selectAuthUser);
  const error = useSelector(selectError);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;



  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid Email')
        .matches(emailRegExp, "Invalid Email"),
      password: Yup.string()
        // .required('Email or password is incorrect. Try Again'),
    }),
    onSubmit: async (values) => {
      try {
        // await validationSchema.validate(values);
        dispatch(actions.loadLogin(values));
        // history.push('/');

      } catch (err: any) {
        formik.setFieldError(err.path, err.message)
      }
    },
  });

  const capchaExpire = ()=>{
        setDisableSubmit(true);
    }

useEffect(()=>{
    toast.error(error, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
},[error])

    
  return (
    <div className="form-page" style={{height: '138vh'}}>
      <Container>
        <Row className="reverse">
          <Col xl={4} lg={5} md={6} sm={12}>
            <div className="form-container">
              <div className="form-header">
                <h1>Log in </h1>
                <p>Please input your information in the fields below to enter your Journey platform. </p>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="form-in">
                  <label>Account</label>
                  <InputGroup>
                    <span className="icon">
                      <img src={user} width="16" height="13" alt="user" />
                    </span>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      placeholder="Enter your email">
                    </Input>
                  </InputGroup>
                  <InputGroup>
                    <span className="icon">
                      <img src={key} width="16" height="16" alt="user" />
                    </span>
                    <Input
                      id="password"
                      name="password"
                      type={passwordShown ? "text" : "password"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      placeholder="Password">
                    </Input>
                    <span className="show-icon">
                      {passwordShown === true ?
                        <img src={HidePassword} width="16.49" height="13.46" alt="user" onClick={togglePassword} /> :
                        <img src={ShowPassword} width="16.49" height="13.46" alt="user" onClick={togglePassword} />
                      }
                    </span>
                  </InputGroup>
                  <div className="error-msg">
                    {formik.touched.email && formik.errors.email || formik.touched.password && formik.errors.password ? (
                      <span>{formik.errors.email || formik.errors.password }</span>
                      // || formik.errors.password || error
                    ) : null}

                    {formik.values.email.length === 0 || formik.values.password.length === 0 ?
                      '' : <span></span>
                    }

                  </div>
                  <Link to="/forgotpassword" className="forgot">Forgot your password?</Link>

                </div>
                <div className='form-border'></div>
                {/*<ReCAPTCHA sitekey="6LelQbIeAAAAAN3midczQwTcuH7IhDg46xLangs8" onExpired={() => capchaExpire()} onChange={useCallback(() => { setDisableSubmit(false) }, [])} />*/}
                <button type="submit" >Log in</button>

              </form>
              <div className="form-footer">
                <p>Don't have an account yet?</p>
                <Link to="/register">Register here</Link>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={7} md={6} sm={12}>
            <div className="form-img">
              <div className="img-in">
                <img src={loginimg} width="100%" height="100%" alt="Login" />
              </div>
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};
