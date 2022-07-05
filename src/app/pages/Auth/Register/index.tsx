import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import PasswordStrengthBar from 'react-password-strength-bar';
import {
  selectAuth,
} from 'app/redux/Auth/slice/selectors';
import { useLocation } from 'react-router-dom';
import { useAuthSlice } from "../../../redux/Auth/slice";
import { useHistory } from "react-router-dom";
import { Row, Col, Container, InputGroup, Input, FormGroup } from 'reactstrap';
import ReCAPTCHA from "react-google-recaptcha";
import RegisterImg from 'assets/register.png';
import RegisterImgRes from 'assets/loginimg.png';
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";

import ShowPassword from '../../../../assets/show.png'
import HidePassword from '../../../../assets/view.png'
import Select from "react-select";
import { Country } from "country-state-city";
import { endpoints } from "../../../../config/API";
import { request } from '../../../../utils/request'
import { toast, ToastContainer } from 'react-toastify';

import parsePhoneNumberFromString, {
  isValidPhoneNumber,
} from 'libphonenumber-js'

export const Register = () => {
  const history = useHistory();
  const { actions } = useAuthSlice();
  const username = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [code, setCode] = useState<any>("");
  const [count, setCount] = React.useState("");
  const [phone, setPhone] = useState()
  const [passwordShown, setPasswordShown] = useState(false);
  const [npasswordShown, setNPasswordShown] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [check, setCheck] = useState(false)
  const [errorr, setErrorr] = useState('');
  const [error, setError] = useState('');
  const [referralLink, setReferralLink] = useState('');
  const search = useLocation().search;
  const name: any = new URLSearchParams(search).get('referrer');
  const [isReferralDisable, setIsReferralDisable] = useState(true)

  const countriesname = Country.getAllCountries();


  const [countryCode, setCountryCode] = React.useState('code');
  const countryOption = [{ label: "", value: "", phoneCode: "", symbol: "" }];
  countriesname.map((e, i) => {

    return countryOption.push({
      label: e.flag + "       " + e.name,
      value: e.name,
      phoneCode: e.phonecode,
      symbol: e.isoCode
    });
  });
  var countryOption1 = countryOption.slice(1, countryOption.length);


  const handelChange = (e: any) => {
    setCount(e.value)
    { setCountryCode(e.phoneCode) } { setCode(e.symbol) }
  }
  const selectStyles = {
    control: (base, state) => ({
      ...base,
      border: "1px solid #d1d1d1 !important",
      boxShadow: "0 !important",
      fontSize: "12px !important",
      height: "42px !important",
    })
  };
  const capchaExpire = () => {
    setDisableSubmit(true);
  }




  useEffect(() => {
    const user = localStorage.getItem('Login');
    if (user !== null) {
      const data = JSON.parse(user);
      dispatch(actions.login(data));
    }
  }, [])


  const nameR = /[a-zA-Z]+('[a-zA-Z])?[a-zA-Z]*/;
  const nameRegExp = /^((?=.*-')^[a-zA-Z-\s'\s]{1,19}[a-zA-Z]$)|((?!.*-')^[a-zA-Z-\s'\s]{3,26}$)/;
  const referralRegExp = /^https:\/\/dev-binanceplus\.rnssol\.com(\/(register)\?(referrer)\=)?([a-zA-Z]|[a-zA-Z]+\d)(\d|[a-zA-Z]+\d){1,26}/
  const usernameRegExp = /^([a-zA-Z]|[a-zA-Z]+\d){3,26}(\d|[a-zA-Z]+\d){1,26}/;
  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
  const phoneNumberRegExp = /^[0-9]{7,15}[^0]{0,15}$/;
  const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,15}$/;



  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      userName: '',
      country: '',
      phoneNumber: '',
      referrallink: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        // .required('Required')
        .matches(nameRegExp, "Name you entered is invalid. Try Again "),
      userName: Yup.string()
        .min(3, 'Too Short!')
        .max(26, 'Too Long!')
        .matches(usernameRegExp, "User Name is invalid. Try Again "),

      phoneNumber: Yup.string()
        .min(8, "Number you entered is invalid. Try Again")
        .max(15, "Number you entered is invalid. Try Again")
        // .required("This field is Required")
        .matches(phoneNumberRegExp, "Number you entered is invalid. Try Againd"),
      // country: Yup.string()
      //   .required('Required'),
      referrallink: Yup.string()
        .matches(usernameRegExp, "Invalid Referrer Name"),

      country: Yup.string(),

      email: Yup.string()
        .email('Email you entered is invalid. Try Again ')
        // .required('Required')
        .matches(emailRegExp, "Email you entered is invalid. Try Again "),
      password: Yup.string()
        .min(8, 'Password you entered is too short. Try Again')
        .max(15, 'Password length should be in between 8 and 15 characters. Try Again')
        // .required('Required')
        .matches(passwordRegExp, "Length should be 8-15 alphanumeric characters including at least 1 capital letter and 1 special character"),
      passwordConfirmation: Yup.string()
        // .min(8, 'Password you entered is too short. Try Again')
        // .max(15, 'Password you entered is invalid. Try Again')
        // .required('Required')
        .when("password", {
          is: val => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Password doesnot match"
          )
        })
    }),

    onSubmit: async (values) => {
      var valid = false;
      let changedValues = JSON.parse(JSON.stringify(values))
      console.log("changedValues: ", changedValues)

      if (countryCode.includes("+")) {
        changedValues.phoneNumber = countryCode + changedValues.phoneNumber
        changedValues.country = count;
      }
      else {
        changedValues.phoneNumber = '+' + countryCode + changedValues.phoneNumber
        changedValues.country = count;
      }

      if (isValidPhoneNumber(changedValues.phoneNumber, code)) {
        setErrorr('')
        valid = true;
      }
      else {
        setErrorr(' Invalid Country Number')
      }

      if (valid) {
        var config = {
          method: 'post',
          url: formik.values.referrallink === null || formik.values.referrallink === '' ? endpoints.register+name : endpoints.register+formik.values.referrallink,
          headers: {
            'Content-Type': 'application/json'
          },
          data: changedValues
        };
        try {
          const retRegister = await request(config);
          var mail = retRegister['data'];
          history.push({ pathname: "/register_success", state: `${values.email}` })

        } catch (err: any) {
          (err.response.data.message);
          let er = (err.response.data.message);
          console.log("Error is: ", er)

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
      else { console.log('error') }
    },
  });
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const toggleNPassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setNPasswordShown(!npasswordShown);
  };
  console.log("name and link us: ", formik.values.referrallink === null || formik.values.referrallink === '' ?  endpoints.register + name : endpoints.register + formik.values.referrallink)

  // console.log("Search location is: ", useLocation() + `/${formik.values.referrallink}`)
  // history.push(`/referrer?${formik.values.referrallink}`)
  return (
    <div className="form-page">
      <Container>
        <Row className='reverse'>
          <Col xl={7} lg={7} md={12} sm={12}>
            <div className="form-container">
              <div className="form-header">
                <Row>
                  <Col xl={6} lg={12} md={12} sm={12}>
                    <h1> Input your information </h1>
                  </Col>
                  <Col xl={6} lg={12} md={12} sm={12}>
                    <p>We need you to help us with some basic information for your account creation. Here are our terms and conditions. Please read them carefully.  </p>
                  </Col>
                </Row>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className="form-in">
                  <Row>
                    <Col xl={6} md={12} sm={8}>
                      <FormGroup>
                        <label>Name</label>
                        {/* <InputGroup> */}
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.fullName}
                          placeholder="Enter Your Full Name"
                          className='reg-input'
                        >
                        </Input>
                        {/* </InputGroup> */}
                        <div className="error-msg">
                          {formik.touched.fullName && formik.errors.fullName ? (
                            <span>{formik.errors.fullName}</span>
                          ) : null}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col xl={6} md={12} sm={8}>
                      <FormGroup>
                        <label>Email</label>

                        <InputGroup>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Enter Your Email Address"
                            className='reg-input'>
                          </Input>
                        </InputGroup>
                        <div className="error-msg">
                          {formik.touched.email && formik.errors.email ? (
                            <span>{formik.errors.email}</span>
                          ) : null}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col xl={6} md={12} sm={8}>
                      <FormGroup>

                        <label>User Name <span style={{ opacity: '0.25' }}>(Only letters & numbers)</span></label>
                        <InputGroup>
                          <span className='username'>
                            https://login.binance.co/?
                          </span>

                          <Input
                            id="userName"
                            name="userName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.userName}
                            placeholder="User Name"
                            className='register-user'

                          >
                          </Input>
                        </InputGroup>
                        <div className="error-msg">
                          {formik.touched.userName && formik.errors.userName ? (
                            <span>{formik.errors.userName}</span>
                          ) : null}
                        </div>
                        {/* <div className="error-msg">
                          {formik.values.userName.length === 0 ? <span style={{ color: 'green' }}>Only letters, numbers and Special charaters are allowed</span> : ''}
                        </div> */}
                      </FormGroup>
                    </Col>
                    <Col xl={6} md={12} sm={8}>
                      <FormGroup>
                        <label>Country</label>
                        <InputGroup>
                          <Select className="country-select" placeholder={<div>Select Your Country</div>} options={countryOption1} styles={selectStyles} onChange={(e) => handelChange(e)} />
                        </InputGroup>
                        <div className="error-msg">
                          {formik.touched.country && formik.errors.country ? (
                            <span>{formik.errors.country}</span>
                          ) : null}
                        </div>

                      </FormGroup>
                    </Col>
                    <Col xl={6} md={12} sm={8}>
                      <label>Phone Number</label>
                      <InputGroup>
                        <span className="phone-code">{countryCode.includes('code') ? <span style={{ color: '#999' }}>Code</span> : countryCode.includes('+') ? countryCode : <>+{countryCode}</>}</span>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="number"
                          min="0"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phoneNumber}
                          placeholder="Phone"
                          className='register-phone'
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }
                          }
                        >
                        </Input>
                      </InputGroup>
                      <div className="error-msg">
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                          <span>{formik.errors.phoneNumber}</span>
                        ) : null}

                        {errorr}

                      </div>

                    </Col>

                    <Col xl={6} md={12} sm={8}>
                      <label>Referral Name</label>
                      <InputGroup>
                        <Input
                          id="referrallink"
                          name="referrallink"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={name === '' || name === null || name === undefined ? formik.values.referrallink : name}
                          // https://dev-binanceplus.rnssol.com/register?referrer=
                          placeholder="Enter Referral Name"
                          // placeholder={name === '' || name === null || name === undefined ? "Enter Referral Link" : name}
                          className='reg-input'
                        // disabled={name === '' || name === null || name === undefined ? false : true}
                        >
                        </Input>
                      </InputGroup>
                      <div className="error-msg">
                        {formik.touched.referrallink && formik.errors.referrallink ? (
                          <span>{formik.errors.referrallink}</span>
                        ) : null}


                      </div>

                    </Col>
                  </Row>
                </div>

                <div className="form-in">
                  <Row>
                    <Col xl={6} md={12} sm={8}>
                      <FormGroup>
                        <label>Password</label>
                        <InputGroup>

                          <Input
                            id="password"
                            name="password"
                            type={passwordShown ? "text" : "password"}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder="Password"
                            className='reg-input'
                          >
                          </Input>

                          <span className="show-icon">
                            {passwordShown === true ?
                              <img src={HidePassword} width="16.49" height="13.46" alt="user" onClick={togglePassword} /> :
                              <img src={ShowPassword} width="16.49" height="13.46" alt="user" onClick={togglePassword} />
                            }
                          </span>
                        </InputGroup>
                        <div className="error-msg">
                          {formik.touched.password && formik.errors.password ? (
                            <span>{formik.errors.password}</span>
                          ) : ''}
                        </div>

                        {formik.values.password === formik.values.passwordConfirmation && formik.values.password.length > 0 ? '' :

                          formik.values.password.length > 0 ?
                            <>
                              <PasswordStrengthBar
                                minLength={1}
                                password={formik.values.password}
                                barColors={[
                                  "#B83E26",
                                  "#FFB829",
                                  "#009200",
                                  "#009200",
                                  "#009200",
                                  "#009200"
                                ]}

                                className='password-strength'
                              />
                            </> : <div className='password-sdiv'></div>
                        }
                      </FormGroup>
                    </Col>
                    <Col xl={6} md={12} sm={8}>
                      <FormGroup>
                        <label>Confirm Password</label>
                        <InputGroup>

                          <Input
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            type={npasswordShown ? "text" : "password"}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.passwordConfirmation}
                            placeholder="Confirm password"
                            className='reg-input'
                          >
                          </Input>
                          <span className="show-icon">
                            {npasswordShown === true ?
                              <img src={HidePassword} width="16.49" height="13.46" alt="user" onClick={toggleNPassword} />
                              :
                              <img src={ShowPassword} width="16.49" height="13.46" alt="user" onClick={toggleNPassword} />}
                          </span>


                        </InputGroup>

                        <div className="error-msg">
                          {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                            <span>{formik.errors.passwordConfirmation}</span>
                          ) : formik.values.passwordConfirmation.length === 0 ? '' : formik.values.password.length === 0 ? <span>Please enter new password first</span> : ''}
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>

                  <div className='terms'>
                    <div className="check-box">
                      <Input type="checkbox" onClick={() => setCheck(!check)} />
                    </div>
                    <p>I agree with terms and conditions.</p>
                  </div>
                </div>

                <ReCAPTCHA sitekey="6LelQbIeAAAAAN3midczQwTcuH7IhDg46xLangs8" onExpired={() => capchaExpire()} onChange={useCallback(() => { setDisableSubmit(false) }, [])} />
                <button type="submit" disabled={
                  // formik.dirty ||
                  formik.values.fullName.length === 0 ||
                  formik.values.email.length === 0 ||
                  formik.values.userName.length === 0 ||
                  // formik.values.country.length === 0 ||
                  formik.values.phoneNumber.length === 0 ||
                  formik.values.password.length === 0 ||
                  // name.length > 0 ||
                  // formik.values.referrallink.length === 0 ||
                  formik.values.password !== formik.values.passwordConfirmation ||
                  !isReferralDisable ||

                  !check || disableSubmit
                }
                >Register</button>

              </form>
              <div className="form-footer">
                <p>Already have an account?</p>
                <Link to="/login">Login here</Link>
              </div>
            </div>
          </Col>
          <Col xl={5} lg={5} md={12} sm={12}>
            <div className="form-img">
              {/* <div className="img-in"> */}
              <img src={RegisterImg} width="100%" height="100%" alt="Register" className="desk-view" />
              <img src={RegisterImgRes} width="100%" height="100%" alt="Register" className="res-view" />
              {/* </div> */}
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </Container >
    </div>
  );
};