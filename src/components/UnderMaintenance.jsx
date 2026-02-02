import React from "react";

const UnderMaintenance = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚧 Under Maintenance</h1>
        <p style={styles.text}>
          We’re currently performing scheduled maintenance.
          <br />
          Please check back soon.
        </p>

        <p style={styles.subText}>
          Thank you for your patience 🙏
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    maxWidth: "400px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    marginBottom: "15px",
    fontSize: "28px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
  },
  subText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#888",
  },
};

export default UnderMaintenance;
