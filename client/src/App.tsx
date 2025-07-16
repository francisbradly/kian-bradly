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
  return (
    <TooltipProvider>
      <BrowserDetector />
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
