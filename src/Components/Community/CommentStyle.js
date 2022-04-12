import Styled from "styled-components";

export const CommentStyle = Styled.div`
    ${(props) => {
      let theme = props.theme;
      return `
            display:flex;
            ${
              props.isEven
                ? `justify-content: flex-end;`
                : `justify-content: flex-start;;`
            }
            padding:${theme.gXL};
            ${theme.fontPrimary};
            ${theme.fMD};


            .description{
                width:calc((100% - 60px)/4);
            }
            .image{
                width:calc((100% - 60px)/4);
                margin:0 ${theme.gXL};
                background:rgba(${theme.white},1);
                padding:${theme.gXL};
                position:relative;
                box-shadow:0 0  0 2px rgb(${
                  theme.white
                }),0.3em 0.3em 1em rgba(${theme.black},0.3);

                >img{
                    width:100%;
                }
                >svg{
                    position:absolute;
                    top:-2px;
                    right:-2px;
                    background:rgba(${theme.primary},1);
                    padding:10px;
                    width:40px;
                    height:40px;
                }
            }
            .post{
                display:flex;
                flex-direction:column;
                width:calc((100% - 60px)/4);
                padding:${theme.gXL};
                box-shadow:0 0  0 2px rgb(${
                  theme.white
                }), 0.3em 0.3em 1em rgba(${theme.black},0.3);
                
                >span{
                    display:flex;
                    margin-top:auto;
                    align-self:flex-end;
                    align-items:center;
                    justify-content:center;
                    ${theme.fLG};

                    >b{
                        display:flex;
                        align-self:flex-end;
                        align-items:center;
                        justify-content:center;
                        margin-left:${theme.gSM};
                        >svg{
                            margin-right:${theme.gSM};
                        }
                    }
                }
            }


            ${theme.mMX_SM}
                {
                    flex-direction:column;
                    align-items:center;

                    .description{
                        width:380px;
                    }
                    .image{
                        width:380px;
                        margin:${theme.gXL} 0;

                    }
                    .post{
                        width:380px;
                    }
                }

                ${theme.mMX_XS}{
                    .description{
                        width:80%;
                    }
                    .image{
                        width:80%;
                        margin:0;
                    }
                    .post{
                        width:80%;
                    }
                }
        `;
    }}
`;
