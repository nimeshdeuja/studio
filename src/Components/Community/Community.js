import React from "react";
import Comment from "./Comment";
import { CommunityStyle } from "./CommunityStyle";

let community = [
  {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    title: "@buzzfeedfood",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec commodo turpis. Pellentesque iaculis sagittis sem, lobortis maximus libero pretium vitae. Morbi consequat orci id dui lacinia, nec faucibus magna blandit. Pellentesque et consectetur velit.",
    image:
      "https://www.usfoods.com/content/usfoods-dce/en/_jcr_content/slideshow-container/slide-2/image3.img.jpg/1647881422267.jpg",
    comments: 60,
    likes: 14700,
  },
  {
    description: "",
    title: "@love_food",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://www.usfoods.com/content/usfoods-dce/en/_jcr_content/slideshow-container/slide-2/image3.img.jpg/1647881422267.jpg",
    comments: 798,
    likes: 99700,
  },
  {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    title: "@buzzfeedfood",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://www.usfoods.com/content/usfoods-dce/en/_jcr_content/slideshow-container/slide-2/image3.img.jpg/1647881422267.jpg",
    comments: 152,
    likes: 18200,
  },
];

const Community = () => {
  let communityElement;
  if (community.length > 0) {
    communityElement = community.map((item, index) => (
      <Comment key={index} comment={item} index={index} />
    ));
  }
  return (
    <CommunityStyle>
      <div className="wrapper">
        <h2>
          Meet Our <br />
          Community
          <span>Know More</span>
        </h2>
        {communityElement}
      </div>
    </CommunityStyle>
  );
};

export default Community;
