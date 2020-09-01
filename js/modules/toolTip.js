export default class ToolTip {
  constructor(toolTips) {
    this.toolTips = document.querySelectorAll(toolTips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.toolTipBox.style.top = `${event.pageY + 20} px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = `${event.pageX - 190} px`;
    } else {
      this.toolTipBox.style.left = `${event.pageX + 20} px`;
    }
  };

  onMouseLeave({
    currentTarget
  }) {
    this.toolTipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  };

  createToolTipBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('toolTip');
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    this.toolTipBox = toolTipBox;
  }

  onMouseOver({
    currentTarget
  }) {
    this.createToolTipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  };

  addToolTipEvent() {
    this.toolTips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.toolTips.length) {
      this.addToolTipEvent();
    }
    return this;
  }
}