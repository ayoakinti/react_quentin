import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import NavigationMenu from "./NavigationMenu";

function Navigation() {
  const [ShowMenu, setShowMenu] = useState(false);
  const maskTransitions = useTransition(ShowMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(ShowMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon onClick={() => setShowMenu(!ShowMenu)} icon={faBars} />
      </span>

      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              onClick={() => setShowMenu(false)}
              className="fixed top-0 left-0 h-screen w-full bg-black-t-50 z-50"
              key={key}
              style={props}
            ></animated.div>
          )
      )}

      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              className="fixed top-0 left-0 h-full w-4/5 bg-white z-50"
              key={key}
              style={props}
            >
              <NavigationMenu closeMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Navigation;
