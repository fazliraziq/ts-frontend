import Event from "../../components/event/event";
import Ticket from "../../components/ticket/ticket";
import FooterBar from "../footer/footer";
import HeaderBar from "../header/header";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "../pages/NotFound/notFound";
import Home from "../../components/home/home";
import Login from "../../components/login/login";
import Signup from "../../components/signup/signup";

function Container() {
    return (
        <>
            <Router>
                <HeaderBar/>
                <main class="mx-auto max-w-screen-md p-4">
                <Switch>
                    <Route exact path="/">    
                        <Home />
                    </Route> 
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/signup">
                        <Signup/>
                    </Route>
                    <Route exact path="/event">
                        <Event/>
                    </Route>
                    <Route exact path="/events"/>
                    <Route exact path="/ticket">
                        <Ticket/>
                    </Route>
                    <Route exact path="/tickets"/>
                    <Route exact path="*">
                        <NotFound/>
                    </Route>
                </Switch>
                </main>
                <FooterBar/>
            </Router>
        </>
    );
  }
  
  export default Container;