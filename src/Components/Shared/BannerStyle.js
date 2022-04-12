import Styled from "styled-components";

export const BannerStyle = Styled.div`
    ${(props) => {
      let theme = props.theme;
      return `
            background:rgba(${theme.primary},1);
            width:${props.width}px;
            height:${props.height}px;

            display:flex;
            justify-content:center;
            align-items:center;
        `;
    }}
`;
