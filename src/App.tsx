import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard"; // Import the new Dashboard layout
import DashboardOverview from "./pages/DashboardOverview"; // Import the Dashboard Overview
import KavithaiCreator from "./pages/KavithaiCreator"; // Import KavithaiCreator
import SettingsPage from "./pages/SettingsPage"; // Import SettingsPage

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* Dashboard and its nested routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardOverview />} /> {/* Default dashboard view */}
            <Route path="kavithai" element={<KavithaiCreator />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;