import React, { useState, useEffect } from "react";
import { useParallax } from "react-scroll-parallax";

import { GetMenu } from "../Shared/ServerRequest";
import { FilterMenuByType, UpdateObject } from "../Shared/Utility";
import { OurMenuStyle } from "./OurMenuStyle";
import MenuItem from "./MenuItem";

const OurMenu = () => {
  const firstEffect = useParallax({ speed: -10 });
  const thirdEffect = useParallax({ speed: -10 });
  const secondEffect = useParallax({ speed: -10, translateY: [-10, 10] });
  const fourthEffect = useParallax({ speed: -10, translateY: [-10, 10] });

  const [menu, setMenu] = useState({
    isLoading: true,
    reload: true,
    list: [],
  });

  // get menu list from server
  useEffect(() => {
    let isMounted = true;
    if (menu.reload) {
      GetMenu("https://studiographene-exercise-api.herokuapp.com/foods")
        .then((list) => {
          if (isMounted) {
            setMenu((prev) =>
              UpdateObject(prev, {
                isLoading: false,
                reload: false,
                list,
              })
            );
          }
        })
        .catch((status) => {
          setMenu((prev) =>
            UpdateObject(prev, {
              isLoading: false,
              reload: false,
            })
          );
          console.error(`Error while requesting for menu list: ${status}`);
        });
    }
    return () => (isMounted = false);
  }, [menu.isLoading, menu.reload]);

  let startersElement, mainCoursesElement, sidesElement, dessertsElement;
  if (menu.list.length > 0) {
    let {
      availableStarters,
      availableMainCourses,
      availableSides,
      availableDesserts,
    } = FilterMenuByType(menu.list);
    startersElement = <MenuItem itemsList={availableStarters} />;
    mainCoursesElement = <MenuItem itemsList={availableMainCourses} />;
    sidesElement = <MenuItem itemsList={availableSides} />;
    dessertsElement = <MenuItem itemsList={availableDesserts} />;
  }

  return (
    <OurMenuStyle>
      <h2>
        Our Menu
        <span>Know More</span>
      </h2>
      <div className="wrapper">
        <div>
          <div ref={firstEffect.ref}>
            <h3>Starters</h3>
            {startersElement}
          </div>
        </div>
        <div>
          <div ref={secondEffect.ref}>
            <h3>Main Courses</h3>
            {mainCoursesElement}
          </div>
        </div>
        <div>
          <div ref={thirdEffect.ref}>
            <h3>Sides</h3>
            {sidesElement}
          </div>
        </div>
        <div>
          <div ref={fourthEffect.ref}>
            <h3>Desserts</h3>
            {dessertsElement}
          </div>
        </div>
      </div>
    </OurMenuStyle>
  );
};

export default OurMenu;
