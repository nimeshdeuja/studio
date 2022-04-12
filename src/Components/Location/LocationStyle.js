import Styled from "styled-components";

export const LocationStyle = Styled.div`
    ${(props) => {
      let theme = props.theme;

      // calculate left position for title
      let position = (props.titlePos - 1100) / 2;
      return `
      position:relative;
      width:100%;

      >h2{
        background:rgba(${theme.white},1);
        display:flex;
        flex-direction:column;

        position: absolute;
        left:${position}px;
        top:${theme.g3XL};

        ${theme.fontSecondary};
        text-transform: uppercase;

        z-index:9999;
        ${theme.f4XL};
        padding:${theme.gMD};

        ${theme.mMX_XL}
        {
            left:5%;
        }
        >b{
            margin-top:-20px;
        }
            >span{
                ${theme.fontPrimary};
                ${theme.fLG};
                width:200px;
                text-transform: capitalize;
                padding:${theme.gXL} 0 0 0;
                ${theme.fMD};
            }
        }
        `;
    }}
`;
