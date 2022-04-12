import Styled from "styled-components";

export const FooterStyle = Styled.div`
    ${(props) => {
      let theme = props.theme;
      return `
            width:100%;
            color:rgba(${theme.white},1);
            background:rgba(${theme.secondary},1);
            padding:${theme.g2XL} 0;

            .wrapper{
                margin:0 auto; 
                display:flex;
                flex-direction:column;

                ${theme.wrapper};
                ${theme.mMX_XL}
                {
                    width:90%;
                }

                .footer-link{
                    display:flex;
                    justify-content:start;
                    margin-bottom:${theme.gMD};

                    div{
                        margin-right:${theme.gMD};
                        width:150px;
                        b{
                            ${theme.fontSecondary};
                            font-weight:400;
                            color:rgba(${theme.primary},1);
                            text-transform: uppercase;
                        }

                        ul{
                            margin-top:${theme.gMD};
                            li{
                                margin-bottom:${theme.gMD};
                                a{
                                    color:rgba(${theme.white}, 0.7);
                                    :hover{
                                        color:rgba(${theme.white}, 1);
                                    }
                                }
                            }
                        }
                    }

                    div:last-child{
                        margin-left: auto;
                        margin-right:0;
                        width: 180px;
                        display:flex;
                        justify-content:end;
                        align-items:center;

                        h2{
                            display:flex;
                            flex-direction:column;
                            align-items: end;

                            ${theme.fontSecondary};
                            ${theme.f2XL};
                            color:rgba(${theme.white},0.8);
                            line-height:1.1;
                            text-transform: uppercase;

                            b{
                                font-size:40px;
                                color:rgba(${theme.white},0.8);
                            }
                        }
                    }
                }

                .footer-copyright{
                    display:flex;
                    color:rgba(${theme.white},0.8);
                    span{
                        margin-left:auto;
                        color:rgba(${theme.white},0.4);
                    }
                }
            }
        `;
    }}
`;
