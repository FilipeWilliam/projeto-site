export default function outSideClick(element, events, callBack) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutSideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutSideClick);
      });
      callBack();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutSideClick);
      });
    });
    element.setAttribute(outside);
  }
}