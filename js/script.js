import {
  motionValue,
  animate,
  press,
  hover,
  stagger,
  inView,
} from "https://cdn.jsdelivr.net/npm/motion@12.23.20/+esm";

class CursorAnimator {
  constructor() {
    this.cursorDot = document.querySelector(".cursor-dot");
    this.cursorRing = document.querySelector(".cursor-ring");

    this.dotX = motionValue(0);
    this.dotY = motionValue(0);
    this.ringX = motionValue(0);
    this.ringY = motionValue(0);

    this.interactiveElements = document.querySelectorAll("a, button");
  }

  moveDotWithSpring(targetX, targetY) {
    animate(this.dotX, targetX, {
      type: "spring",
      stiffness: 800,
      damping: 35,
    });
    animate(this.dotY, targetY, {
      type: "spring",
      stiffness: 800,
      damping: 35,
    });
  }
  moveRingWithSpring(targetX, targetY) {
    animate(this.ringX, targetX, {
      type: "spring",
      stiffness: 200,
      damping: 25,
    });
    animate(this.ringY, targetY, {
      type: "spring",
      stiffness: 200,
      damping: 25,
    });
  }

  updateDotPosition = () => {
    this.cursorDot.style.left = `${this.dotX.get()}px`;
    this.cursorDot.style.top = `${this.dotY.get()}px`;
  };
  updateRingPosition = () => {
    this.cursorRing.style.left = `${this.ringX.get()}px`;
    this.cursorRing.style.top = `${this.ringY.get()}px`;
  };

  applyHoverClassToCursor() {
    this.interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        this.cursorDot.classList.add("hover");
        this.cursorRing.classList.add("hover");
      });
      element.addEventListener("mouseleave", () => {
        this.cursorDot.classList.remove("hover");
        this.cursorRing.classList.remove("hover");
      });
    });
  }

  bindCursorMotionValues = () => {
    this.dotX.onChange(this.updateDotPosition);
    this.dotY.onChange(this.updateDotPosition);
    this.ringX.onChange(this.updateRingPosition);
    this.ringY.onChange(this.updateRingPosition);
  };

  onMouseMove = (event) => {
    this.moveDotWithSpring(event.clientX, event.clientY);
    this.moveRingWithSpring(event.clientX, event.clientY);

    const el = document.elementFromPoint(event.clientX, event.clientY);
    const blackCursor = el.closest(".bg-dark") ? false : true;

    this.cursorDot.style.backgroundColor = blackCursor ? "black" : "white";
    this.cursorRing.style.borderColor = blackCursor ? "black" : "white";
  };

  attachEvents = () => {
    this.applyHoverClassToCursor();
    this.bindCursorMotionValues();
    window.addEventListener("mousemove", this.onMouseMove);
  };

  detachEvents = () => {
    window.removeEventListener("mousemove", this.onMouseMove);
  };
}

class ClickableAnimator {
  constructor(element) {
    this.initialState = {
      isHovered: false,
      isPressed: false,
    };
    this.gestureState = new WeakMap();
    this.transition = { type: "spring", stiffness: 500, damping: 25 };
    this.element = element;
  }

  setGesture(update) {
    const state = this.gestureState.get(this.element) || {
      ...this.initialState,
    };
    const newState = { ...state, ...update };
    this.gestureState.set(this.element, newState);
    let scale = 1;
    if (newState.isPressed) {
      scale = 0.9;
    } else if (newState.isHovered) {
      scale = 1.2;
    }
    animate(this.element, { scale }, this.transition);
  }

  attachEvents() {
    hover(this.element, (element) => {
      this.setGesture({ isHovered: true });
      return () => this.setGesture({ isHovered: false });
    });

    press(this.element, (element) => {
      this.setGesture({ isPressed: true });
      return () => this.setGesture({ isPressed: false });
    });
  }
}

class MediaIconAnimator {
  staggerIcons(section) {
    const icons = Array.from(section.querySelectorAll(".icons"));
    animate(
      icons,
      { opacity: [0, 1], y: [50, 0] },
      { duration: 0.8, delay: stagger(0.4), easing: "ease-out" }
    );
  }
  animateConnectPage() {
    inView("#connect", (section) => {
      const animator = new MediaIconAnimator();
      animator.staggerIcons(section);
    });
  }
}

class AddAnimation {
  initialize() {
    new CursorAnimator().attachEvents();

    new ClickableAnimator(document.querySelector("#resume_btn")).attachEvents();

    const iconNodeList = document.querySelectorAll(".icons");
    const icons = [...iconNodeList];
    icons.forEach((icon) => {
      new ClickableAnimator(icon).attachEvents();
    });

    new MediaIconAnimator().animateConnectPage();
  }
}

new AddAnimation().initialize();

// animate("#home_title", { x: 300 }, { delay: stagger(0.1) });
// const greetingContainer = document.querySelector("#greetingContainer");
// const text = "Hi, I'm Irene";

// text.split("").forEach((char) => {
//   const span = document.createElement("span");
//   if (char === " ") {
//     span.classList.add("space");
//     span.textContent = " ";
//   } else {
//     span.classList.add("letter");
//     span.textContent = char;
//   }
//   greetingContainer.appendChild(span);
// });

// animate(
//   ".letter",
//   {
//     opacity: [0, 1],
//     y: [50, 0],
//   },
//   {
//     duration: 0.6,
//     delay: stagger(0.05),
//     easing: "ease-out",
//   }
// );
