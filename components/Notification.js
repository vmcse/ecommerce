import { useEffect } from "react";

export default function Notification({
  message,
  show,
  onClose,
  duration = 3000,
}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 z-50">
      <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
        {message}
      </div>
    </div>
  );
}
