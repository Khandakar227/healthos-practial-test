import styles from "./Loader.module.css";

function Loader({
  loaderColor = "#000",
  size = "64px",
  loaderLineSize = "8px",
  width='80px',
  height='80px'
}: {
  loaderColor?: string;
  size?: string;
  loaderLineSize?: string;
  width?:string;
  height?:string
}) {
  const styleProps = {
    "--loader-color": loaderColor,
    "--loader-size": size,
    "--loader-line-size": loaderLineSize,
    "--width": width,
    "--height": height
  } as React.CSSProperties;

  return (
    <div className={styles.ldsRing} style={styleProps}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
