import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: './',
  server: {
    host: "::",
    port: 3000,
    /** 
     * TODO: Usar o objeto proxy quando o projeto rodar em uma porta e o back-end em outra.
     * * OBS: No meu caso o projeto roda na localhost:8080 e o back-end roda na 8081 e dava erro de CORS.
     * * Precisa adicionar esse objeto abaixo e no arquivo (api.ts) responsável por instanciar o axios, e trocar o baseUrl por string vazia.
    
    proxy: {
      // Redireciona /api para http://localhost:8081
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        secure: false
      }
    }
    */
  },
  plugins: [
    react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
