import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/Toaster";
import { ToastProvider } from "./components/ui/Toast";
import { TooltipProvider } from "./components/ui/Tooltip";
import { KEY_DARK_THEME } from "./consts/Keys";
import { DrawerCSSProvider } from "./providers/DrawerCSSProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { PrimeReactProvider } from 'primereact/api';

/* TELAS */
import Inicio from "./pages/Inicio";
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

/* COMPONENT */
const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey={KEY_DARK_THEME}>
        <DrawerCSSProvider>
          <ToastProvider>
            <Toaster />

            <TooltipProvider>
              <PrimeReactProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={
                      <Layout>
                        <Inicio />
                      </Layout>
                    } />
                  </Routes>
                </BrowserRouter>
              </PrimeReactProvider>
            </TooltipProvider>
          </ToastProvider>
        </DrawerCSSProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
