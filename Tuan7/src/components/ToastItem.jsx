export default function ToastItem({ toast }) {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    >
      {toast.message}
    </div>
  );
}
