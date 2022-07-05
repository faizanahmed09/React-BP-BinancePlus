/**
*
* Faq
*
*/
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Container } from 'reactstrap';
import { messages } from './messages';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

interface Props { }

export function Faq(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const [pStyles, setPStyles] = React.useState('p')

  const styleComp = () => {
    setPStyles('p1')

  }

  return (
    <section id="faq">
      {/*  {t(...messages.someThing())}  */}
      <Container>
        <Row>
          <Col xl={12}>
            <h3>Frequently Asked Questions</h3>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span className="circle"></span>
                    <span className="title">WHAT ARE CRYPTOCURRENCIES?</span>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>WHAT ARE CRYPTOCURRENCIES?</h4>
                    <p>Cryptocurrencies are coins or money in digital form created to make payments or a medium of exchange, usually decentralized, that uses blockchain technology and cryptography to ensure the validity of transactions and prevent fraud, as all transactions are audited by the network itself.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span className="circle"></span>
                    <span className="title">WHAT IS BINANCE?</span>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>WHAT IS BINANCE?</h4>
                    <p>Binance is a global cryptocurrency exchange (exchange) that provides a platform for trading over 100 cryptocurrencies. Since the beginning of 2018, Binance is considered the largest cryptocurrency exchange in the world in terms of trading volume.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <span className="circle"></span>
                    <span className="title">WHAT IS BinancePlus?</span>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>WHAT IS BinancePlus?</h4>
                    <p>BinancePlus is a decentralized platform with a technology system that works on your BINANCE account (verified) through BINANCE's own API (without authorization for withdrawals), carrying out 100% automated trades 24/7 with the mission of generating profits directly from your BINANCE account to your Bitcoin and USDT balance.</p>
                    <p>Exclusive BinancePlus technology gives your BINANCE account ZERO LOSS. This means that your account is at ZERO RISK of having financial losses as your balance will always be in USDT, Bitcoin and/or Ethereum.</p>
                    <p>The BinancePlus system seeks an average monthly profit of 20% (there is no profit guarantee)</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    <span className="circle"></span>
                    <span className="title"> WHICH AFFILIATE INVITED YOU?</span>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>WHICH AFFILIATE INVITED YOU?</h4>
                    <p>You can only register on the BinancePlus platform through an Affiliate. The Affiliate who invited you will help you in every step and support you in everything you need regarding the BinancePlus platform.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    <span className="circle"></span>
                    <span className="title"> HOW DOES BinancePlus WORK?</span>
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>HOW DOES BinancePlus WORK?</h4>
                    <p>It's very simple. Follow these steps:</p>
                    <ol>
                      <li>Use your BINANCE account which is already verified with your documents. If you don't have a BINANCE account yet, open one now by copying and pasting the link in your browser: https://bit.ly/3okkJ2e</li>
                      <li>Have the recommended minimum balance of 150 USDT and or 0.005 BTC.</li>
                      <li>Create an API from your Binance account and register in the BinancePlus system. Your account will start having all the benefits and profits of the BinancePlus platform.</li>
                    </ol>
                    <p>Your BINANCE account CANNOT HAVE another API nor be used for other USDT/BTC/ETH trades.</p>
                    <p>DO NOT turn off or cancel your Binance API. If you shut down or cancel your Binance API, you will need to pay a new BinancePlus plan to be able to rebind.</p>
                    <p>You can have other cryptocurrencies in your BINANCE account and trade with these other cryptocurrencies.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    <span className="circle"></span>
                    <span className="title">IS IT SAFE TO USE THE BinancePlus SYSTEM?</span>
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>IS IT SAFE TO USE THE BinancePlus SYSTEM?</h4>
                    <p>Yes. Binance offers the highest levels of security and BinancePlus, in addition to security, works with the best High Frequency Trading (HFT) technologies.</p>
                    <p>Your Bitcoin and USDT will always be 100% in your account and 100% in your control.</p>
                    <p>Never share your BINANCE and BinancePlus passwords with anyone.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    <span className="circle"></span>
                    <span className="title">WHAT IS THE VALUE TO USE THE BinancePlus SYSTEM?</span>
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>WHAT IS THE VALUE TO USE THE BinancePlus SYSTEM?</h4>
                    <p>The BinancePlus system is marketed exclusively through affiliates who use the technology, showing the advantages and the results of their BINANCE accounts.</p>
                    <p>The value of the plans is according to the performance fee you choose and the affiliate program.</p>
                    <p>Silver, Gold, Premium and Platinum plans are annual, customers of these plans have no maximum capital limit they can have in their Binance accounts.</p>
                    <p>The values ​​of these plans vary according to the performance fee charged on the profit generated in your Binance account.</p>
                    <p>Pay the amount in KLAY shown on the invoice plus the amount of the fee charged by your broker. If you pay less than the amount shown on the invoice plus the fee, your invoice will not be recognized as paid by the BinancePlus system and the amount sent will be forfeited. If you use BINANCE to make your payment, the fee amount is already included in the BinancePlus invoice.</p>
                    <ul>
                      <li><b>Performance Fees</b>
                        <p>Every 30 days, the system generates an individual billing invoice for each strategy on the profit generated in the Binance customer's account. This invoice must be paid within 48 hours. If the customer does not pay the invoice, the BinancePlus system will be paralyzed and will only work again after payment.</p>
                        <p>If there are open orders at the time of invoice generation, the amounts in the orders will be deducted from the generated profits, that is, BinancePlus always charges the performance fee on the profit that is actually available in your account.</p>
                        <p>If there are closed orders with 0% profit and there are discounts from Binance fees that are not reflected in the closed trade statement, BinancePlus may apply a discount on the performance fee charged.</p>
                        <p>For the silver plan above, upon reaching 5 times the bonus plan value of the affiliate program, you must purchase a new plan or higher (in this case only the earnings on the Affiliate Program are added - plan fees and of performance). Here is an example: If you purchased the silver plan, for 100 USDT, as soon as your Affiliate Network produces profits of five times the value of your plan, that is, 500 USDT, you will no longer receive profits from the Affiliate Network. , however your BinancePlus system in your BINANCE account will remain active for a period of one year, if you keep up to date with the payment of the performance fee, based on the date of contracting the plan. When you activate a new silver or higher plan, you will return to receiving your affiliate program bonuses, and will not receive any potential losses (retroactive) while you were on the inactive plan.</p>
                      </li>
                      <li><b>Renovations</b>
                        <p>The BinancePlus affiliate program automatically distributes bonuses to its affiliates according to direct and indirect sales and performance fees. When the bonuses paid to this affiliate reach the plan's earnings limit, the customer must renew their plan generating a new invoice. If the affiliate fails to pay the invoice, automatic affiliate program payments will stop and all future bonuses will be forfeited. On the date this affiliate pays the invoice, the bonus starts again. Failure to pay the renewal invoice does not affect the profit generation system (financial market operations) of plans silver, gold, platinum and premium.</p>
                      </li>
                      <li><b>API DELETION</b>
                        <p>After activating your Binance API with BinancePlus, you will not be able to delete your API under any circumstances. If you delete your API key, you will lose all rights to your current plan and you MUST BUY A NEW PLAN to reconnect your new API.</p>
                      </li>
                    </ul>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    <span className="circle"></span>
                    <span className="title">CAN I DEPOSIT OR WITHDRAW USDT AND BITCOINS FROM MY BINANCE ACCOUNT AT ANY TIME?</span>
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>CAN I DEPOSIT OR WITHDRAW USDT AND BITCOINS FROM MY BINANCE ACCOUNT AT ANY TIME?</h4>
                    <p>You can deposit at any time, as the technology will make a daily check of your balance, and will proceed to carry out operations according to your new capital.
                    </p>
                    <p>Do not withdraw if there are open orders. You could end up making a loss on your account. And remember that BinancePlus technology delivers profit on profit. That is, the greater the balance of your BINANCE account, the greater your profit.</p>
                    <p>If your balance is less than 150 USDT and/or 0.005 BTC for withdrawal reasons, your plan will be canceled and you will have to purchase a new license to use BinancePlus technology again.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    <span className="circle"></span>
                    <span className="title">HOW CAN I BE SURE MY BITCOINS ARE SAFE?</span>
                  </button>
                </h2>
                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>HOW CAN I BE SURE MY BITCOINS ARE SAFE?</h4>
                    <p>The BinancePlus system can only trade via BINANCE APIs without access to withdrawals. The security of your crypto assets is under your own custody and under the protection of BINANCE which has its own mechanisms to prevent you from suffering any kind of loss, we recommend using 2FA security. And never share your password with anyone.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTen">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                    <span className="circle"></span>
                    <span className="title">HOW MANY TRADING DOES THE PER DAY PLATFORM?</span>
                  </button>
                </h2>
                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>HOW MANY TRADING DOES THE PER DAY PLATFORM?</h4>
                    <p>There is no predefined number of trades, the system does it according to the strategy and the more volatile the market is, the more orders it will open.</p>
                    <p>Some people ask if it's normal to go days without opening orders. Yes, this is normal. BinancePlus is an artificial intelligence system that analyzes various market parameters and indicators. It analyzes the direction of whales (big Bitcoin buyers and sellers), buy and sell orders launched on the market, seeks to identify fake orders that are canceled before being executed, monitors the news and its impact on the market through indicators specific. It uses analytical monitoring systems of transaction histories in specific periods according to Bitcoin market sentiment and its co-connection with other financial markets.</p>
                    <p>BinancePlus seeks to carry out operations with the highest degree of assertiveness. The BinancePlus Platform opens dozens and sometimes hundreds of orders. However, in the financial market, the most experienced know that: "Not trading is also trading."</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEleven">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                    <span className="circle"></span>
                    <span className="title">HOW DO RENEWAL AND CHANGE PLANS WORK?</span>
                  </button>
                </h2>
                <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>HOW DO RENEWAL AND CHANGE PLANS WORK?</h4>
                    <p>In plans, there are earnings from the affiliate plans. When the sum of these earnings is five times the value of your plan, you must renew your plan.</p>
                    <p>In the other plans, there are earnings from the affiliate plans. When the sum of these earnings is three times the value of your plan, you must renew your plan.</p>
                    <p>You can purchase a new plan even before you reach your plan's maximum earnings cap, ensuring your plan doesn't expire. Your previous limit will be added to your new purchased limit.</p>
                    <p>Here is an example: If you purchased the Silver plan, for 100 USDT, as soon as your Affiliate Network produces profits of five times the value of your plan, that is, 500 USDT, you will no longer receive profits from the Affiliate Network. , but your robot will remain active for a period of one year, if you keep up to date with the payment of the performance fee, based on the date of contracting the plan. When you activate a new silver or higher plan, you will return to receiving your affiliate program bonuses, and will not receive any potential losses (retroactive) while you were on the inactive plan.</p>
                    <p>You can change your plan whenever you want. There is no upgrade (up) or downgrade (down) of plan. Every time you want to switch plans, you must subscribe to the new plan. If there are any earnings limits remaining on your previous plan, they will be added to your new plan.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwelve">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                    <span className="circle"></span>
                    <span className="title">HOW DO BinancePlus SYSTEM PROFITS WORK?</span>
                  </button>
                </h2>
                <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>HOW DO BinancePlus SYSTEM PROFITS WORK?</h4>
                    <p>Profits from operations on your BINANCE account are generated in USDT and/or BTC directly into your BINANCE account.</p>
                    <p>All operations are carried out on the SPOT market on the BTC/USDT and/or ETH/BTC pair directly on your BINANCE account.</p>
                    <p>All operations performed on your Binance account are reflected on your BinancePlus statement in orders. However, the percentages and values ​​shown in the BinancePlus order statement may differ from the values ​​displayed in your Binance account and may even vary due to fees, communication interruptions from the Binance API, updates, network interruptions, promotions and/or discounts offered by BinancePlus technology.</p>
                    <p>Profits from the Affiliate Program are automatically credited to your KLAY wallet registered in the BinancePlus system. Use your Binance account's KLAY wallet to receive your Affiliate Program bonuses. We are not responsible for KLAY wallets that are not from Binance as there are exchanges that require minimum amounts to receive KLAY and therefore some BinancePlus Affiliate Program commissions may not arrive because they are lower amounts.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
