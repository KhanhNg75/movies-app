import { StyledThemeProvider } from "definitions/styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import "./i18n";

import Home from "pages";

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <StyledThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Home />
        </div>
      </QueryClientProvider>
    </StyledThemeProvider>
  );
}

export default App;
