import { useEffect, useState } from "react";
import abelLogo from "@/assets/abel-logo.png";

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading = ({ onLoadingComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-heading flex items-center justify-center transition-transform duration-700 ease-in-out ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="text-center space-y-4">
        <img 
          src={abelLogo} 
          alt="Abel Mesfin" 
          className="w-[250px] h-auto mx-auto animate-fade-in"
        />
        <div className="w-64 h-1 bg-accent rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
