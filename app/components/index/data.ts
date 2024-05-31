
import TM1 from "@/public/img/TM1.jpeg";
import TM2 from "@/public/img/TM2.jpeg";
import TW1 from "@/public/img/TW1.jpeg";
import TW2 from "@/public/img/TW2.jpeg";

import Feature1 from "@/public/img/Feature1.png";
import Feature2 from "@/public/img/Feature2.png";
import Feature3 from "@/public/img/Feature3.png";

import Bitcoin from "@/public/img/pair-icon-btcusd.img.svg";
import Ethereum from "@/public/img/pair-icon-ethusd.img.svg";
import Binance from "@/public/img/pair-icon-bnbusd.img.svg";
import Cosmos from "@/public/img/pair-icon-atomusd.img.svg";

import Crypto from "@/public/img/Crypto.jpeg";
import Trading from "@/public/img/Trading.jpeg";
import Expert from "@/public/img/Expert.jpg";
import { FlagIconCode } from "react-flag-kit";

import HomeIcon from '@mui/icons-material/Home';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import DnsIcon from '@mui/icons-material/Dns';
import CopyrightIcon from '@mui/icons-material/Copyright';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import PeopleIcon from '@mui/icons-material/People';


export const payouts = [
    { id: 1, color: "#7653e1", text: "Delmer Kuhlman", amount: "2,328.00"},
    { id: 2, color: "#7cbef9", text: "Clifton Deckow", amount: "7,474.00"},
    { id: 3, color: "#f0a560", text: "Gina Hills", amount: "6,967.00"},
    { id: 4, color: "#6d6af6", text: "Elta Fritsch", amount: "1,372.00"},
    { id: 5, color: "#371e8c", text: "Name Ziemann", amount: "4,234.00"},
    { id: 6, color: "#371e8c", text: "Daniela Erdman", amount: "3,306.00"},
    { id: 7, color: "#371e8c", text: "Bernhard Haag", amount: "7,684.00"},
    { id: 8, color: "#7cbef9", text: "Shawna Goldner", amount: "8,486.00"},
    { id: 9, color: "#6d6af6", text: "Hazle Konopelski", amount: "2,095.00"},
    { id: 10, color: "#371e8c", text: "Kenneth Gorczany", amount: "1,389.00"},
    { id: 11, color: "#79dac8", text: "Lela Kuhn", amount: "4,278.00"},
    { id: 12, color: "#79dac8", text: "Benedict Donnelly", amount: "3,166.00"},
    { id: 13, color: "#f0a560", text: "Raphaelle Spencer", amount: "6,125.00"},
    { id: 14, color: "#6d6af6", text: "Sadie Lesch", amount: "5,257.00"},
    { id: 15, color: "#7653e1", text: "Nico Kshlerin", amount: "1,033.00"},
    { id: 16, color: "#6d6af6", text: "Britney Runolfsdottir", amount: "2,576.00"},
    { id: 17, color: "#371e8c", text: "Jermaine Howe", amount: "6,991.00"},
    { id: 18, color: "#79dac8", text: "Brisa Rice", amount: "2,100.00"},

]

export const testimonies = [
    {id: 1, name: "Miles Kozey", comment: "I am extremely pleased with the platform, in terms of ease and speed of use and reliability.", image: TM2},
    {id: 2, name: "Katrine Welch", comment: "Very simple and secure method to add some interest to your investments", image: TW2},
    {id: 3, name: "Kianna Heaney", comment: "I tripled the bitcoin in my wallet with this service in just 7 days.", image: TW1},
    {id: 4, name: "Geoffrey Dare", comment: "Easy to use, risk-free trading platform that increases ones earning potential.", image: TM1}
]

export const features = [
    {
      id: 1,
      heading: "Fast Registration",
      paragraph:
        "Only 1 minute and you're in. Enter the information you need to become a platform investor and start right away.",
      image: Feature1,
    },
    {
      id: 2,
      heading: "Fast Trades",
      paragraph:
        "Invest and sit back. You can follow your investment status at any time and invest in limited time special offers.",
      image: Feature2,
    },
    {
      id: 3,
      heading: "Timely Support",
      paragraph:
        "We provide unbeatable support service via email or live chat to give a professional and fast response.",
      image: Feature3,
    },
  ];

  export const cryptos = [
    { id: 1, img: Bitcoin, name: "Bitcoin" },
    { id: 2, img: Ethereum, name: "Ethereum" },
    { id: 3, img: Binance, name: "Binance Coin" },
    { id: 4, img: Cosmos, name: "Cosmos" },
  ];

  

  export const offerList = [
    {
      id: 1,
      img: Crypto,
      heading: "Crypto Trading",
      paragraph:
        "Now you can start trading Bitcoin, Ethereum and many more cryptocurrencies quickly, easily and safely from wherever you are — in just seconds",
      link: "/crypto-trading",
    },
    {
      id: 2,
      img: Trading,
      heading: "Forex Trading",
      paragraph:
        "The forex market is a place where currencies are traded. It is the largest and most liquid financial market in the world with an average daily turnover of 6.6 trillion U.S. dollars as of 2019.",
      link: "/forex-trading",
    },
    {
      id: 3,
      img: Expert,
      heading: "Crypto Trading",
      paragraph:
        "Copy trading allows you to directly copy the positions taken by another trader. You decide the amount you wish to invest and simply copy everything they do automatically.",
      link: "/crypto-expert-traders",
    },
  ];
  export const plans = [
    { title: "Bronze", amount: "50" },
    { title: "Premium", amount: "600" },
    { title: "Gold", amount: "1200" },
    { title: "Platinum", amount: "50000" },
  ];

  
  export const faqs = (param: any) => {
    let faqArray: any[] = [
      { id: 1, question: "How does copy trading work?", answer: "Here is how the copier works: You, as an investor, simply select an expert or experts that you want to copy trades from. Once you are signed up, this is the only action needed on your part. Once you’ve taken care of the above, you are all set. There are no codes that you need to run or signals for you to manually input. Our software will handle the trade copying automatically on your behalf. We monitor your experts trading activity and as soon as there is a trade, we calculate all the necessary parameters and execute the trade. The only thing you have to make sure of is that you have enough available base currency that your expert trades with, in your trading account. How much is enough? First, you must meet the exchanges minimum order amount (let’s say about $10 per trade to be safe). That means that if your expert executes a 5% order, you must have at least $300 in your account total value (at 100% expert allocation as an example). This also means that you need to have at least 10% or higher in available base currency to avoid missed trades. When the expert exits a position, you too will exit it. Automatically. You can also change allocation at any time."},
      { id: 2, question: "What are the fees?", answer: "Every investor is to pay a 15% withdrawal fee to complete withdrawal process and each trader gets a set percentage of the profit they make."},
      { id: 3, question: "Who are the trading experts?", answer: "We carefully select expert applicants. We get to know them as a trader and examine their trading performance over a period of time. We also tend to look for expert who already have a following to further confirm their competence (social proof). You can also read about every expert on their individual performance pages."},
      { id: 4, question: "What is the recommended amount to start with?", answer: "We suggest to have around $3000-$5000 in your account in BTC value due to exchanges minimum order requirements and so that you can at least cover the subscription cost every month."},
      { id: 5, question: "How does Bitcoin mining work", answer: "It’s quick and very easy! As soon as we receive your payment your contract will be added to your profile, and you can immediately start mining. Depending on the blockchain algorithm you select and the associated mining service agreement you enter into, you can either mine native cryptocurrencies directly or allocate your hashpower to other cryptocurrencies (marked with AUTO), and even choose a specific allocation for them. For example: 60% LTC, 20% BTC and 20% DOGE. The first mining output is released after 48 hours, and then a daily mining output will follow."},
      { id: 6, question: "Are you mining for yourself?", answer: "Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”."},
      { id: 7, question: "Where is your mining farm located?", answer: "For security reasons, we do not disclose the exact location of our mining farms. As of April 2015, we are operating several mining farms that are located in Europe, America and Asia. Electricity cost and availability of cooling are important, but not the only criteria. See our Datacenters page for more information."},
      { id: 8, question: "What coins I mine with each algorithm?", answer: "You are able to mine Bitcoin and various altcoins directly via our mining allocation page*. The availability of cryptocurrencies you can mine depends on the contract you have chosen.<br/><br/>You must allocate your hashpower in order to determine the cryptocurrency received for your mining output. If no allocation has been made, the mining output will default to the following for the given blockchain algorithm:<br/><br/>SHA-256 contract - Bitcoin<br/>Ethash contract - Ethereum<br/>(*) “" + param + " Advanced Allocation” (special feature): It allows you to get mining outputs in many different coins even if they are not mined directly by a certain algorithm. For example, you can get mining outputs in BTC while mining with an X11 algorithm! That is possible by mining the DASH coin directly, which is then automatically swapped to BTC by our algorithmic framework. The Allocation function is designed for customers to receive delivery of their mining results in their preferred cryptocurrency. We call it “mining BTC the smart way”. The same technique is also used to get mining results in LTC with a SHA-256 contract, etc."},
      { id: 9, question: "How do your ether contracts work?", answer: "When you purchase an Ether mining contract, you buy a share of a GPU (“graphics processing unit“) to mine Ethereum. The hashing algorithm used to mine Ether is called Ethash (or Dagger-Hashimoto).<br/><br/>Ethash requires the so called DAG file in order to perform the calculations. This file grows over time, which means that more operations for each hashing operation need to be performed. This means that the effective hashrate decreases a little each time the DAG file grows.<br/><br/>This has to be considered when comparing the theoretical output of your hashpower. Online calculators do not take this into account.<br/><br/>Also, please keep in mind that some of our products have a maintenance fee attached."},
      { id: 10, question: "What are the expected returns?", answer: "Bitcoin and altcoin mining depends highly on the prices and network difficulties of the Cryptocurrencies that you are mining, which cannot be predicted. It would not “look right” if we would provide data on the mining performance and sell contracts at the same time. Therefore, we recommend all our clients to do their own research and do their own performance calculation.<br/><br/>For example, you might want to have a look at coinwarz.com. Remember that some of our products have a daily maintenance fee which must be deducted from the daily mining rewards.<br/><br/>Please note that the website is an independent source of reference and not related to " + param + " in any manner."},
      { id: 11, question: "Which pools are you using for mining?", answer: "We do not publish a list of pools we are using. Our main criteria for a good pool are: reliability, fee structure and reject rate. Going forward we will solo-mine a few coins (and pass the fee savings to our users!).<br/><br/>Our internal policy is: “be a good crypto citizen”. This means, that we will at least use two different pools (in some cases we use up to four) for each coin. This is to preserve the decentralized nature of the crypto networks! If we become aware that a pool is getting close to 50% share, we will switch away from it and use a backup instead."},
      { id: 12, question: "Isn't buying hardware cheaper?", answer: "On the first glance one might think that buying miner X is slightly cheaper than hosted mining. However, there are a number of “hidden” costs related to purchasing and maintaining a miner that change the economics significantly:<br/><br/>Shipping costs: few merchants will cover this, but in most cases they will charge you extra.<br/><br/>Customs dues / VAT: if it is an international delivery you will likely have to pay customs dues and VAT; generally this has a huge impact on the total cost of your mining equipment.<br/><br/>Delivery time: when you pay for your device you have to wait until the miner is packaged and shipped; if it is held up in the customs this can take weeks. And during that time you cannot mine at all (“opportunity costs”). You have to wait and hope. And if the merchant has a stock shortage; it is you who has to wait. With" + param + " you pay and get your hashpower immediately online. No delays!<br/><br/>Costs for additional equipment: when buying miners from larger retailers you often have to buy additional equipment like an extra PSU that matches the electricity specs for your country, control units and specific shelves to store them efficiently. This adds up significantly to the overall price for hashpower.<br/><br/>Setting the system up: when the device finally arrived you have to assemble and configure it. Beginners often underestimate the amount of work and technical knowledge that is needed to bring the device up and optimize its settings. People that used the first ASICs spend days and weeks on it. In monetary terms this costs you twice: (i) your time and (ii) lost mining opportunity.<br/><br/>Maintenance: hardware failures, outages and crashes could lead to downtimes between seconds and weeks. If your unit breaks you have to return it and start from scratch (by the way: check the guarantee time of your miner; it is often less than a year). With " + param + " you have a guaranteed uptime of 100%: in case one of your units fails another unit will be switched over and start mining for you the very same second.<br/><br/>Electricity: having the machines at home not only brings heat and noise, but also an increase of your electricity bill; an important factor that many underestimate. Please do not get us wrong: we do not want to discourage anyone from mining at home! We are often asked about prices and realized that many users do not know about all the hidden costs. If you compare the true costs, you will notice that our prices are very competitive. We want to provide you the best possible mining experience, so that you can focus on mining your favorite coins (and we take care of the rest)."},
      { id: 13, question: "What is the maintenance fee?", answer: "Some of our products have a maintenance fee attached. The maintenance fee covers all costs related to mining including, inter alia:<br/><br/>electricity cost<br/>cooling<br/>maintenance work<br/>hosting services<br/><br/>The fee is fixed in USD but deducted from the daily mining rewards in the natively mined coin on a daily basis."},
      { id: 14, question: "How can I mine different coins at the same time?", answer: "" + param + " allows its clients to mine different types of coins at the same time. You decide which coins you prefer and you can allocate hashpower accordingly.<br/><br/>Each mining algorithm is set up with a default delivery cryptocurrency. The " + param + " Advanced Auto-Allocation (in short “AUTO”) will apply to all cryptocurrencies which cannot be mined directly. In the user interface go to “Mining Allocation” and choose the hashpower allocation that is best for you. When you are done press “save allocation”.<br/><br/>Remember that the cryptocurrencies marked with (AUTO) are not directly mined, as mentioned in the “What coins can I mine?” section of this Customer Service page.<br/>In order to get the mining output, please ensure to add your wallet address(es) to your " + param + " profile. Find out more details about how to add your wallet(s) in the next section."},
   
    ]
    return faqArray;
  }

  export const countryList: {id: number, code: FlagIconCode}[] = [
    {id: 1, code: "US"},
    {id: 2, code: "TR"},
    {id: 3, code: "PT"},
    {id: 4, code: "IN"},
    {id: 5, code: "NL"},
    {id: 6, code: "IT"},
    {id: 7, code: "AR"},
    {id: 8, code: "SE"},
    {id: 9, code: "ES"},
    {id: 10, code: "ID"},
    {id: 11, code: "DE"},
    {id: 12, code: "VN"},
    {id: 13, code: "IR"},
    {id: 14, code: "VI"},
    {id: 15, code: "FR"}
  ]

  export const currency = [
    { value: "USD", symbol: "$"}, 
    {value: "CAD", symbol: "$"},
    {value: "EUR", symbol: "€"},
    {value: "GBP", symbol: "£"},
    {value: "AUD", symbol: "$"},
    {value: "BRL", symbol: "R$"}
  ]

  export const countries = [
    { id: "AF", name: "Afghanistan" },
    { id: "AX", name: "Åland Islands" },
    { id: "AL", name: "Albania" },
    { id: "DZ", name: "Algeria" },
    { id: "AS", name: "American Samoa" },
    { id: "AD", name: "Andorra" },
    { id: "AO", name: "Angola" },
    { id: "AI", name: "Anguilla" },
    { id: "AQ", name: "Antarctica" },
    { id: "AG", name: "Antigua and Barbuda" },
    { id: "AR", name: "Argentina" },
    { id: "AM", name: "Armenia" },
    { id: "AW", name: "Aruba" },
    { id: "AU", name: "Australia" },
    { id: "AT", name: "Austria" },
    { id: "AZ", name: "Azerbaijan" },
    { id: "BS", name: "Bahamas" },
    { id: "BH", name: "Bahrain" },
    { id: "BD", name: "Bangladesh" },
    { id: "BB", name: "Barbados" },
    { id: "BY", name: "Belarus" },
    { id: "BE", name: "Belgium" },
    { id: "BZ", name: "Belize" },
    { id: "BJ", name: "Benin" },
    { id: "BM", name: "Bermuda" },
    { id: "BT", name: "Bhutan" },
    { id: "BO", name: "Bolivia (Plurinational State of)" },
    { id: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
    { id: "BA", name: "Bosnia and Herzegovina" },
    { id: "BW", name: "Botswana" },
    { id: "BV", name: "Bouvet Island" },
    { id: "BR", name: "Brazil" },
    { id: "IO", name: "British Indian Ocean Territory" },
    { id: "BN", name: "Brunei Darussalam" },
    { id: "BG", name: "Bulgaria" },
    { id: "BF", name: "Burkina Faso" },
    { id: "BI", name: "Burundi" },
    { id: "CV", name: "Cabo Verde" },
    { id: "KH", name: "Cambodia" },
    { id: "CM", name: "Cameroon" },
    { id: "CA", name: "Canada" },
    { id: "KY", name: "Cayman Islands" },
    { id: "CF", name: "Central African Republic" },
    { id: "TD", name: "Chad" },
    { id: "CL", name: "Chile" },
    { id: "CN", name: "China" },
    { id: "CX", name: "Christmas Island" },
    { id: "CC", name: "Cocos (Keeling) Islands" },
    { id: "CO", name: "Colombia" },
    { id: "KM", name: "Comoros" },
    { id: "CG", name: "Congo" },
    { id: "CD", name: "Congo (Democratic Republic of the)" },
    { id: "CK", name: "Cook Islands" },
    { id: "CR", name: "Costa Rica" },
    { id: "HR", name: "Croatia" },
    { id: "CU", name: "Cuba" },
    { id: "CW", name: "Curaçao" },
    { id: "CY", name: "Cyprus" },
    { id: "CZ", name: "Czechia" },
    { id: "DK", name: "Denmark" },
    { id: "DJ", name: "Djibouti" },
    { id: "DM", name: "Dominica" },
    { id: "DO", name: "Dominican Republic" },
    { id: "EC", name: "Ecuador" },
    { id: "EG", name: "Egypt" },
    { id: "SV", name: "El Salvador" },
    { id: "GQ", name: "Equatorial Guinea" },
    { id: "ER", name: "Eritrea" },
    { id: "EE", name: "Estonia" },
    { id: "ET", name: "Ethiopia" },
    { id: "FK", name: "Falkland Islands (Malvinas)" },
    { id: "FO", name: "Faroe Islands" },
    { id: "FJ", name: "Fiji" },
    { id: "FI", name: "Finland" },
    { id: "FR", name: "France" },
    { id: "GF", name: "French Guiana" },
    { id: "PF", name: "French Polynesia" },
    { id: "TF", name: "French Southern Territories" },
    { id: "GA", name: "Gabon" },
    { id: "GM", name: "Gambia" },
    { id: "GE", name: "Georgia" },
    { id: "DE", name: "Germany" },
    { id: "GH", name: "Ghana" },
    { id: "GI", name: "Gibraltar" },
    { id: "GR", name: "Greece" },
    { id: "GL", name: "Greenland" },
    { id: "GD", name: "Grenada" },
    { id: "GP", name: "Guadeloupe" },
    { id: "GU", name: "Guam" },
    { id: "GT", name: "Guatemala" },
    { id: "GG", name: "Guernsey" },
    { id: "GN", name: "Guinea" },
    { id: "GW", name: "Guinea-Bissau" },
    { id: "GY", name: "Guyana" },
    { id: "HT", name: "Haiti" },
    { id: "HM", name: "Heard Island and McDonald Islands" },
    { id: "VA", name: "Holy See" },
    { id: "HN", name: "Honduras" },
    { id: "HK", name: "Hong Kong" },
    { id: "HU", name: "Hungary" },
    { id: "IS", name: "Iceland" },
    { id: "IN", name: "India" },
    { id: "ID", name: "Indonesia" },
    { id: "IR", name: "Iran (Islamic Republic of)" },
    { id: "IQ", name: "Iraq" },
    { id: "IE", name: "Ireland" },
    { id: "IM", name: "Isle of Man" },
    { id: "IL", name: "Israel" },
    { id: "IT", name: "Italy" },
    { id: "JM", name: "Jamaica" },
    { id: "JP", name: "Japan" },
    { id: "JE", name: "Jersey" },
    { id: "JO", name: "Jordan" },
    { id: "KZ", name: "Kazakhstan" },
    { id: "KE", name: "Kenya" },
    { id: "KI", name: "Kiribati" },
    { id: "KP", name: "Korea (Democratic People's Republic of)" },
    { id: "KR", name: "Korea (Republic of)" },
    { id: "KW", name: "Kuwait" },
    { id: "KG", name: "Kyrgyzstan" },
    { id: "LA", name: "Lao People's Democratic Republic" },
    { id: "LV", name: "Latvia" },
    { id: "LB", name: "Lebanon" },
    { id: "LS", name: "Lesotho" },
    { id: "LR", name: "Liberia" },
    { id: "LY", name: "Libya" },
    { id: "LI", name: "Liechtenstein" },
    { id: "LT", name: "Lithuania" },
    { id: "LU", name: "Luxembourg" },
    { id: "MO", name: "Macao" },
    { id: "MK", name: "North Macedonia" },
    { id: "MG", name: "Madagascar" },
    { id: "MW", name: "Malawi" },
    { id: "MY", name: "Malaysia" },
    { id: "MV", name: "Maldives" },
    { id: "ML", name: "Mali" },
    { id: "MT", name: "Malta" },
    { id: "MH", name: "Marshall Islands" },
    { id: "MQ", name: "Martinique" },
    { id: "MR", name: "Mauritania" },
    { id: "MU", name: "Mauritius" },
    { id: "YT", name: "Mayotte" },
    { id: "MX", name: "Mexico" },
    { id: "FM", name: "Micronesia (Federated States of)" },
    { id: "MD", name: "Moldova (Republic of)" },
    { id: "MC", name: "Monaco" },
    { id: "MN", name: "Mongolia" },
    { id: "ME", name: "Montenegro" },
    { id: "MS", name: "Montserrat" },
    { id: "MA", name: "Morocco" },
    { id: "MZ", name: "Mozambique" },
    { id: "MM", name: "Myanmar" },
    { id: "NA", name: "Namibia" },
    { id: "NR", name: "Nauru" },
    { id: "NP", name: "Nepal" },
    { id: "NL", name: "Netherlands" },
    { id: "NC", name: "New Caledonia" },
    { id: "NZ", name: "New Zealand" },
    { id: "NI", name: "Nicaragua" },
    { id: "NE", name: "Niger" },
    { id: "NG", name: "Nigeria" },
    { id: "NU", name: "Niue" },
    { id: "NF", name: "Norfolk Island" },
    { id: "MP", name: "Northern Mariana Islands" },
    { id: "NO", name: "Norway" },
    { id: "OM", name: "Oman" },
    { id: "PK", name: "Pakistan" },
    { id: "PW", name: "Palau" },
    { id: "PS", name: "Palestine, State of" },
    { id: "PA", name: "Panama" },
    { id: "PG", name: "Papua New Guinea" },
    { id: "PY", name: "Paraguay" },
    { id: "PE", name: "Peru" },
    { id: "PH", name: "Philippines" },
    { id: "PN", name: "Pitcairn" },
    { id: "PL", name: "Poland" },
    { id: "PT", name: "Portugal" },
    { id: "PR", name: "Puerto Rico" },
    { id: "QA", name: "Qatar" },
    { id: "RE", name: "Réunion" },
    { id: "RO", name: "Romania" },
    { id: "RU", name: "Russian Federation" },
    { id: "RW", name: "Rwanda" },
    { id: "BL", name: "Saint Barthélemy" },
    { id: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" },
    { id: "KN", name: "Saint Kitts and Nevis" },
    { id: "LC", name: "Saint Lucia" },
    { id: "MF", name: "Saint Martin (French part)" },
    { id: "PM", name: "Saint Pierre and Miquelon" },
    { id: "VC", name: "Saint Vincent and the Grenadines" },
    { id: "WS", name: "Samoa" },
    { id: "SM", name: "San Marino" },
    { id: "ST", name: "Sao Tome and Principe" },
    { id: "SA", name: "Saudi Arabia" },
    { id: "SN", name: "Senegal" },
    { id: "RS", name: "Serbia" },
    { id: "SC", name: "Seychelles" },
    { id: "SL", name: "Sierra Leone" },
    { id: "SG", name: "Singapore" },
    { id: "SX", name: "Sint Maarten (Dutch part)" },
    { id: "SK", name: "Slovakia" },
    { id: "SI", name: "Slovenia" },
    { id: "SB", name: "Solomon Islands" },
    { id: "SO", name: "Somalia" },
    { id: "ZA", name: "South Africa" },
    { id: "GS", name: "South Georgia and the South Sandwich Islands" },
    { id: "SS", name: "South Sudan" },
    { id: "ES", name: "Spain" },
    { id: "LK", name: "Sri Lanka" },
    { id: "SD", name: "Sudan" },
    { id: "SR", name: "Suriname" },
    { id: "SJ", name: "Svalbard and Jan Mayen" },
    { id: "SZ", name: "Swaziland" },
    { id: "SE", name: "Sweden" },
    { id: "CH", name: "Switzerland" },
    { id: "SY", name: "Syrian Arab Republic" },
    { id: "TW", name: "Taiwan, Province of China" },
    { id: "TJ", name: "Tajikistan" },
    { id: "TZ", name: "Tanzania, United Republic of" },
    { id: "TH", name: "Thailand" },
    { id: "TL", name: "Timor-Leste" },
    { id: "TG", name: "Togo" },
    { id: "TK", name: "Tokelau" },
    { id: "TO", name: "Tonga" },
    { id: "TT", name: "Trinidad and Tobago" },
    { id: "TN", name: "Tunisia" },
    { id: "TR", name: "Turkey" },
    { id: "TM", name: "Turkmenistan" },
    { id: "TC", name: "Turks and Caicos Islands" },
    { id: "TV", name: "Tuvalu" },
    { id: "UG", name: "Uganda" },
    { id: "UA", name: "Ukraine" },
    { id: "AE", name: "United Arab Emirates" },
    { id: "GB", name: "United Kingdom of Great Britain and Northern Ireland" },
    { id: "US", name: "United States of America" },
    { id: "UM", name: "United States Minor Outlying Islands" },
    { id: "UY", name: "Uruguay" },
    { id: "UZ", name: "Uzbekistan" },
    { id: "VU", name: "Vanuatu" },
    { id: "VE", name: "Venezuela (Bolivarian Republic of)" },
    { id: "VN", name: "Viet Nam" },
    { id: "VG", name: "Virgin Islands (British)" },
    { id: "VI", name: "Virgin Islands (U.S.)" },
    { id: "WF", name: "Wallis and Futuna" },
    { id: "EH", name: "Western Sahara" },
    { id: "YE", name: "Yemen" },
    { id: "ZM", name: "Zambia" },
    { id: "ZW", name: "Zimbabwe" }
  ];
  

  export const sidebarLinks = [
    {id: 1, icon:HomeIcon, name: "Home", link: "/"},
    {id: 2, icon:PersonOutlinedIcon, name: "Sign In", link: "signin"},
    {id: 3, icon:PersonAddIcon, name: "Sign Up", link: "signup"},
    {id: 4, icon:MailOutlinedIcon, name: "Contact Us", link: "contact"},
    {id: 5, icon:LockOpenOutlinedIcon, name: "Cookie Policy", link: "cookie"},
    {id: 6, icon:LockOpenOutlinedIcon, name: "Privacy Policy", link: "privacy"},
    {id: 7, icon:DnsIcon, name: "Crypto Mining", link: "cryptomining"},
    {id: 8, icon:CopyrightIcon, name: "Bitcoin Mining", link: "bitcoinmining"},
    {id: 9, icon:CopyrightIcon, name: "Dogecoin Mining", link: "dogecoinmining"},
    {id: 10, icon:ContentCopyIcon, name: "Copy Trading", link: "copytrading"},
    {id: 11, icon:CopyrightIcon, name: "Crypto Trading", link: "cryptotrading"},
    {id: 12, icon:FolderOpenIcon, name: "Terms of Service", link: "terms"},
    {id: 13, icon:WysiwygIcon, name: "Forex Trading", link: "forextrading"},
    {id: 14, icon:InsertChartOutlinedIcon, name: "Stocks Trading", link: "stockstrading"},
    {id: 15, icon:DonutLargeOutlinedIcon, name: "Options Trading", link: "optionstrading"},
    {id: 16, icon:PeopleIcon, name: "What is Leverage", link: "leverage"},
    {id: 17, icon:PeopleIcon, name: "Responsible Trading", link: "responsibletrading"},
    {id: 18, icon:FolderOpenIcon, name: "General Risk Disclosure", link: "generalrisk"},
    {id: 19, icon:PeopleIcon, name: "About Us", link: "about"}
  ]
   
