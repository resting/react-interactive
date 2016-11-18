import detectIt from 'detect-it';

export const deviceType = detectIt.deviceType;
export const deviceHasTouch = detectIt.hasTouch;
export const deviceHasMouse = detectIt.hasMouse;
export const passiveEventSupport = detectIt.passiveEvents;

export const mouseEvents = {
  mouseenter: 'onMouseEnter',
  mouseleave: 'onMouseLeave',
  mousemove: 'onMouseMove',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
};

export const touchEvents = {
  touchstart: 'onTouchStart',
  touchend: 'onTouchEnd',
  touchcancel: 'onTouchCancel',
};

export const otherEvents = {
  focus: 'onFocus',
  blur: 'onBlur',
  keydown: 'onKeyDown',
  keyup: 'onKeyUp',
  dragstart: 'onDragStart',
  dragend: 'onDragEnd',
};

export const iStates = {
  normal: true,
  hover: true,
  hoverActive: true,
  touchActive: true,
  keyActive: true,
};

export const focusFromStates = {
  tab: true,
  mouse: true,
  touch: true,
};

export const stateProps = {
  ...iStates,
  active: true,
  focus: true,
};

export const iStateOptionsKeys = ['style', 'className'];

export const focusOptionsKeys = [
  ...iStateOptionsKeys,
  'focusFromTabStyle',
  'focusFromMouseStyle',
  'focusFromTouchStyle',
  'focusFromTabClassName',
  'focusFromMouseClassName',
  'focusFromTouchClassName',
];

// don't toggle focus on these tags
export const nonBlurrableTags = {
  input: true,
  textarea: true,
  select: true,
};

// tags with known roles, and that the browser may have a click handler for
export const knownRoleTags = {
  ...nonBlurrableTags,
  button: true,
  a: true,
  area: true,
};

// elements triggered by the enter key
export function enterKeyTrigger(tag, type) {
  return (tag !== 'select') && (tag !== 'input' || (type !== 'checkbox' && type !== 'radio'));
}

// elements triggered by the space bar
export function spaceKeyTrigger(tag, type) {
  return (tag === 'button') || (tag === 'select') ||
  (tag === 'input' && (type === 'checkbox' || type === 'radio' || type === 'submit'));
}

// known props to not pass through, every prop not on this list is passed through
export const knownProps = {
  ...stateProps,
  children: true,
  as: true,
  style: true,
  className: true,
  onStateChange: true,
  setStateCallback: true,
  onClick: true,
  onTapTwo: true,
  onTapThree: true,
  onTapFour: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseDown: true,
  onMouseUp: true,
  onTouchStart: true,
  onTouchMove: true,
  onTouchEnd: true,
  onTouchCancel: true,
  onFocus: true,
  onBlur: true,
  onKeyDown: true,
  onKeyUp: true,
  forceState: true,
  initialState: true,
  refDOMNode: true,
  mutableProps: true,
  useBrowserOutlineFocus: true,
  useBrowserCursor: true,
  touchActiveTapOnly: true,
  focusToggleOff: true,
  stylePriority: true,
  checkDOMChildren: true,
};

export function dummyEvent(type) {
  return {
    type,
    persist: () => {},
    preventDefault: () => {},
    stopPropagation: () => {},
  };
}
