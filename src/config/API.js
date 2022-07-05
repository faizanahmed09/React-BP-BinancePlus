// export const API = process.env.REACT_APP_API
//     ? process.env.REACT_APP_API
//     : 'https://dev-binanceplus-backend.rnssol.com/';

// export const BASE_URL = process.env.REACT_APP_API
//     ? process.env.REACT_APP_API
//     : 'https://dev-binanceplus-backend.rnssol.com/';
// export const API = process.env.REACT_APP_API ? process.env.REACT_APP_API: 'http://192.168.88.27:3016/';
// export const BASE_URL = process.env.REACT_APP_API ? process.env.REACT_APP_API: 'http://192.168.88.27:3016/';

export const endpoints = {
    //AUTH
    register: `${process.env.REACT_APP_BASE_URL}/auth/register?referrer=`,
    login: `${process.env.REACT_APP_BASE_URL}/auth/login`,
    forgotPassword: `${process.env.REACT_APP_BASE_URL}/auth/forgot_password`,
    confirmforgotPassword: `${process.env.REACT_APP_BASE_URL}/auth/confirm_forgot_password`,
    verifyToken: `${process.env.REACT_APP_BASE_URL}/auth/verify_token`,
    confirmEmail: `${process.env.REACT_APP_BASE_URL}/auth/confirm_email`,
    resendEmail: `${process.env.REACT_APP_BASE_URL}/auth/resend_email?email=`,
    // referralLink: `${process.env.REACT_APP_BASE_URL}/user/update_plan/1`,
    

    //Payment
    orderPlanPayment: `${process.env.REACT_APP_BASE_URL}/payment/order_plan/`,
    walletAddress: `${process.env.REACT_APP_BASE_URL}/payment/address?paymentId=`,
    paymentList: `${process.env.REACT_APP_BASE_URL}/payment/payment_list`,

    //USER
    pereformanceFee: `${process.env.REACT_APP_BASE_URL}/user/preformance_fee`,
    orderPlan: `${process.env.REACT_APP_BASE_URL}/user/business_plan`,
    licenseFees: `${process.env.REACT_APP_BASE_URL}/user/license_fee`,
    userPlan: `${process.env.REACT_APP_BASE_URL}/user/plan_by_id/`,
    affiliatesLevels: `${process.env.REACT_APP_BASE_URL}/user/affiliates`,
    SendProfileVerificationCode: `${process.env.REACT_APP_BASE_URL}/user/profile_verification_code`,
    VerifyCode: `${process.env.REACT_APP_BASE_URL}/user/profile_details/`,
    validatewWalletAddress: `${process.env.REACT_APP_BASE_URL}/user/update_profile`,
    updateTelegramNotifications: `${process.env.REACT_APP_BASE_URL}/user/telegram_code`,  

    // ActivateAPIKey
    ActivateAPIKey: `${process.env.REACT_APP_BASE_URL}/user/binance_credentials`,  

    
};
