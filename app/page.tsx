import styles1 from "./style1.module.css";
import styles2 from "./style2.module.css";
export default function Home() {
  return (
    <div>
      <div className="card">
        <span className="header">globals.css</span>
      </div>
      <div
        style={{
          height: "25vh",
          width: "300px",
          display: "flex",
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "white" }}>Inline Style</span>
      </div>
      <div className={styles1.card}>
        <span className={styles1.header}>CSS Module 1</span>
      </div>
      <div className={styles2.card}>
        <span className={styles2.header}>CSS Module 2</span>
      </div>
    </div>
  );
}
