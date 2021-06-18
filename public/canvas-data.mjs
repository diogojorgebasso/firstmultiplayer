const canvasWidth = 640;
const canvasHeight = 640;
const playerWidth = 640;
const playerHeight = 640;
const border = 5;
const infoBar = 45;

const CanvasCalc = {
  canvasWidth: canvasWidth,
  canvasHeight: canvasHeight,
  playFieldMinX: canvasWidth / 2 - (canvasWidth - 10) / 2,
  playFieldMinY: canvasHeight / 2 - (canvasHeight - 100) / 2,
  playFieldWidth: canvasWidth - border * 2,
  playFieldHeight: canvasHeight - infoBar - border * 2,
  playFieldMaxX: canvasWidth - playerWidth - border,
  playFieldMaxY: canvasHeight - playerHeight - border,
};
const generateStartProps = (min, max, multiple) =>
  Math.floor(Math.random() * ((max - min) / multiple)) * multiple + min;

export { CanvasCalc, generateStartProps };
