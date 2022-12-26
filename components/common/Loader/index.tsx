import styles from "./Loader.module.css";

function Loader({
  loaderColor = "#000",
  size = "64px",
  loaderLineSize = "8px",
}: {
  loaderColor?: string;
  size?: string;
  loaderLineSize?: string;
}) {
  const styleProps = {
    "--loader-color": loaderColor,
    "--loader-size": size,
    "--loader-line-size": loaderLineSize,
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
