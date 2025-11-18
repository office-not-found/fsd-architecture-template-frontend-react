import { QueryProvider } from "@/app/providers/QueryProvider";
import { RouterProvider } from "@/app/providers/RouterProvider";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { ToasterProvider } from "@/app/providers/ToasterProvider";

export const App = () => (
    <QueryProvider>
        <ThemeProvider>
            <ToasterProvider>
                <RouterProvider />
            </ToasterProvider>
        </ThemeProvider>
    </QueryProvider>
);

export default App;
