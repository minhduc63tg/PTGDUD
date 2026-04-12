import { useRecoilValue } from "recoil";
import ToastItem from "./ToastItem";
import { toastState } from "../atoms/toastAtom";

export default function ToastContainer() {
  const toasts = useRecoilValue(toastState);

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
      }}
    >
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} />
      ))}
    </div>
  );
}
