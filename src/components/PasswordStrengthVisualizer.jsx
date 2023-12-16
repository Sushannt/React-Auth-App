import { useContext } from "react";
import { AppStateContext } from "../contexts/AppStateContext";

const PasswordStrengthVisualizer = () => {
  const { password } = useContext(AppStateContext);

  return password.strength === "weak" ? (
    <div className="flex w-[25%] h-2 transition-all">
      <div className="border-2 w-full rounded-md bg-yellow-400 border-yellow-400"></div>
    </div>
  ) : password.strength === "medium" ? (
    <div className="flex gap-x-3 w-[50%] h-2 transition-all">
      <div className="border-2 w-full rounded-md bg-orange-400 border-orange-400"></div>
      <div className="border-2 w-full rounded-md bg-orange-400 border-orange-400"></div>
    </div>
  ) : (
    <div className="flex gap-x-3 w-[100%] h-2 transition-all">
      <div className="border-2 w-full rounded-md bg-green-400 border-green-400"></div>
      <div className="border-2 w-full rounded-md bg-green-400 border-green-400"></div>
      <div className="border-2 w-full rounded-md bg-green-400 border-green-400"></div>
    </div>
  );
};

export default PasswordStrengthVisualizer;
