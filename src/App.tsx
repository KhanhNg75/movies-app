import { StyledThemeProvider } from "definitions/styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import "./i18n";

import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "components/header/index";
import GlobalStyle from "styles/globalStyles";

import { Footer } from "components/footer";
import { Routes } from "config/Routes";

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <StyledThemeProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <BrowserRouter>
          <Route
            render={(props) => (
              <>
                <Header {...props} />
                <Routes />
                <Footer />
              </>
            )}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </StyledThemeProvider>
  );
}

export default App;
