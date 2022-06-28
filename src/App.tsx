import { Event } from "./pages/Event"
import { Router } from "./components/Router"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"

function App() {
  return(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>  
    </ApolloProvider>
  )
}

export default App
