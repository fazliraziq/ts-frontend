import Event from "../../components/event/event";
import Ticket from "../../components/ticket/ticket";
import FooterBar from "../footer/footer";
import HeaderBar from "../header/header";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "../pages/NotFound/notFound";
import Home from "../../components/home/home";
import Login from "../../components/login/login";
import Signup from "../../components/signup/signup";
import EventListing from "../../components/event/event.listing";
import EventForm from "../../components/event/event.form";
import TicketListing from "../../components/ticket/ticket.listing";
import Checkout from "../../components/checkout/checkout";

function Container() {
    return (
        <>
            <Router>
                <HeaderBar/>
                <main class="mx-auto max-w-screen-md p-4">
                <Switch>
                    <Route exact path="/">    
                        <Home/>
                    </Route> 
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/signup">
                        <Signup/>
                    </Route>
                    <Route exact path="/create-event">
                        <EventForm/>
                    </Route>
                    <Route exact path="/event/:id">
                        <Event/>
                    </Route>
                    <Route exact path="/events">
                        <EventListing/>
                    </Route>
                    <Route exact path="/ticket">
                        <Ticket/>
                    </Route>
                    <Route exact path="/tickets">
                        <TicketListing/>
                    </Route>
                    <Route exact path="/cart/:eventId">
                        <Checkout/>
                    </Route>
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