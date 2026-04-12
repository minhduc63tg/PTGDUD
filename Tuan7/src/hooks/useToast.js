import { useSetRecoilState } from "recoil";
import { toastState } from "../atoms/toastAtom";

export default function useToast() {
  const setToasts = useSetRecoilState(toastState);

  const showToast = (message) => {
    const id = Date.now();

    // thêm toast
    setToasts((old) => [...old, { id, message }]);

    // auto remove sau 3s
    setTimeout(() => {
      setToasts((old) => old.filter((t) => t.id !== id));
    }, 3000);
  };

  return { showToast };
}
