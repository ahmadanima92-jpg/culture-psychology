import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Geography from "./pages/Geography";
import Geology from "./pages/Geology";
import DigitalCitizenship from "./pages/DigitalCitizenship";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/geography" component={Geography} />
      <Route path="/geology" component={Geology} />
      <Route path="/digital-citizenship" component={DigitalCitizenship} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
