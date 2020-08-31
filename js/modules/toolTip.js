export default function initToolTip() {
  const toolTips = document.querySelectorAll('[data-toolTip]');

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = `${event.pageY + 20} px`;
      this.toolTipBox.style.left = `${event.pageX + 20} px`;
    },
  };

  const onMouseLeave = {
    toolTipBox: '',
    element: '',
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function createToolTipBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('toolTip');
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }

  function onMouseOver() {
    const toolTipBox = createToolTipBox(this);

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  toolTips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}