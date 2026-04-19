import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page not found</p>

      <Button onClick={() => navigate("/")}>
        Go Home
      </Button>
    </div>
  );
}