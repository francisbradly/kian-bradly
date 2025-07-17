import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BrowserDetector from "@/components/BrowserDetector";
import Home from "@/pages/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const blockedKeys = [123, 73, 74, 67, 75]; // F12, I, J, C, K
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && blockedKeys.includes(e.keyCode)) || // Ctrl+Shift+...
        (e.ctrlKey && [85, 83, 65, 80].includes(e.keyCode)) // Ctrl+U, S, A, P
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <TooltipProvider>
      <BrowserDetector />
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
