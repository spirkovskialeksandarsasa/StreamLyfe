import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { exchangeCodeForToken } from "../auth";
import { useAppStore } from "../store";
import LoadingSpinner from "../components/ui/LoadingSpinner/LoadingSpinner";

function CallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setToken = useAppStore((state) => state.setToken);
  const handled = useRef(false);

  useEffect(() => {
    // The authorization code can only be used once.
    if (handled.current) return;
    handled.current = true;

    const code = searchParams.get("code");
    const state = searchParams.get("state");

    const login = async () => {
      try {
        if (code) {
          setToken(await exchangeCodeForToken(code, state));
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
      void navigate("/", { replace: true });
    };
    void login();
  }, [searchParams, navigate, setToken]);

  return <LoadingSpinner />;
}

export default CallbackPage;
