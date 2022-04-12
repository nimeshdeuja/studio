import { createGlobalStyle } from "styled-components";

export const currentTheme = {
  primary: "255, 218, 200",
  secondary: "51, 51, 51",

  white: "255, 255, 255",
  gray: "248, 248, 248",
  black: "0,0,0",
  red: "245, 0, 87",
  green: "81, 187, 131",
  blue: "0,146,181",

  border: "1px solid rgba(51, 51, 51, 0.1)",

  fSM: `font-size: 12px`,
  fDF: `font-size: 14px`,
  fMD: `font-size: 16px`,
  fLG: `font-size: 18px`,
  fXL: `font-size: 22px`,
  f2XL: `font-size: 32px`,
  f4XL: `font-size: 42px`,

  f3XL: `font-size: 42px`,

  gSM: "5px",
  gMD: "10px",
  gLG: "15px",
  gXL: "20px",
  gML: "40px",
  g2XL: "50px",
  g3XL: "70px",

  fontPrimary: `font-family:  'Open Sans', sans-serif;`,
  fontSecondary: `font-family: 'Roboto Condensed', 'Open Sans', sans-serif;`,

  mMX_2XS: "@media (max-width: 380px)",
  mMX_XS: "@media (max-width: 500px)",
  mMX_DF: "@media (max-width: 620px)",
  mMX_SM: "@media (max-width: 768px)",
  mMX_MD: "@media (max-width: 991px)",
  mMX_LG: "@media (max-width: 1100px)",
  mMX_XL: "@media (max-width: 1200px)",

  wrapper: `width:1100px;`,
};

export const GlobalStyle = createGlobalStyle`
    ${(props) => {
      let theme = props.theme;
      return `
        body, html
        {
            background:rgb(${theme.white})!important;
            height: 100%!important;
            -webkit-overflow-scrolling: touch;
        
            margin: 0!important;
            padding: 0!important;
            min-width: unset!important;
            ${theme.fontPrimary}!important;
            ${theme.fDF}!important;
            line-height: 1.4285em!important;
            color:rgba(${theme.secondary},1);
        }
        * 
        {
        margin: 0;
        padding: 0;
        }

        a
        {
            text-decoration: none;
        }

        h1,h2,h3,h4,h5,h6
        {
        ${theme.fontPrimary}!important;
        margin: 0;
        padding: 0;
        }

        ul,li{
            list-style: none;
            margin: 0;
            padding: 0;
        }

        #root
        {
            height:100%;
            width:100%;
        }
        `;
    }}
`;
