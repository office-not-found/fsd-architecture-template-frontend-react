import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
// import fs from 'fs';

// function showTotalBuildSize() {
//   return {
//     name: 'show-total-build-size',
//     closeBundle() {
//       const distPath = path.resolve(__dirname, 'dist/assets');
//       const files = fs.readdirSync(distPath);

//       let total = 0;
//       for (const file of files) {
//         const stats = fs.statSync(path.join(distPath, file));
//         total += stats.size;
//       }

//       console.log(`\nTotal bundle size: ${(total / 1024).toFixed(2)} KB`);
//     }
//   };
// }

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        host: true,
        open: true
    },
    preview: {
        port: 5173
    },    
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
