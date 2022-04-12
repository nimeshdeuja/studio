import React from "react";
import { useParallax } from "react-scroll-parallax";

import { isEven, numberCountFormatter } from "../Shared/Utility";
import { CommentStyle } from "./CommentStyle";

import InstagramIcon from "@mui/icons-material/Instagram";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Comment = ({ comment, index }) => {
  const commentEffect = useParallax({ speed: -2, translateY: [-2, 2] });
  return (
    <CommentStyle isEven={isEven(index)} ref={commentEffect.ref}>
      {comment.description && (
        <p className="description">{comment.description}</p>
      )}

      {comment.image && (
        <div className="image">
          <img src={comment.image} />
          <InstagramIcon />
        </div>
      )}

      {comment.text && (
        <div className="post">
          <p>{comment.text}</p>
          <span>
            {comment.comments && (
              <b>
                <ModeCommentIcon /> {numberCountFormatter(comment.comments)}
              </b>
            )}
            {comment.likes && (
              <b>
                <FavoriteIcon /> {numberCountFormatter(comment.likes)}
              </b>
            )}
          </span>
        </div>
      )}
    </CommentStyle>
  );
};

export default Comment;
