import React from 'react';
import Home from './pages/Home';
import { Route, Redirect, Switch } from "react-router-dom";

// pages
import AboutUs from "views/pages/AboutUs.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/pages/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import NucleoIcons from "views/NucleoIcons.js";
import Presentation from "views/Presentation.js";
import Pricing from "views/examples/Pricing.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Sections from "views/Sections.js";
import SignupPage from "views/examples/SignupPage.js";
import DropdownScrollNavbar from 'components/Navbars/DropdownScrollNavbar';
import Payment from './pages/Payment';
import Services from './pages/Services';
import FooterDefault from "components/Footers/FooterBlack.js";

const App = () => {
    return (
        <>
            <DropdownScrollNavbar/>
            <Switch>
                <Route path="/about" render={(props) => <AboutUs {...props} />} />
                <Route path="/blog-post" render={(props) => <BlogPost {...props} />} />
                <Route path="/blog-posts" render={(props) => <BlogPosts {...props} />} />
                <Route path="/contact" render={(props) => <ContactUs {...props} />} />
                <Route path="/e-commerce" render={(props) => <Ecommerce {...props} />} />
                <Route path="/index" render={(props) => <Index {...props} />} />
                <Route path="/payment" render={(props) => <Payment {...props} />} />
                <Route path="/service" render={(props) => <Services {...props} />} />
                <Route
                    path="/landing-page"
                    render={(props) => <LandingPage {...props} />}
                />
                <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
                <Route
                    path="/nucleo-icons"
                    render={(props) => <NucleoIcons {...props} />}
                />
                <Route
                    path="/presentation"
                    render={(props) => <Presentation {...props} />}
                />
                <Route path="/pricing" render={(props) => <Pricing {...props} />} />
                <Route
                    path="/product-page"
                    render={(props) => <ProductPage {...props} />}
                />
                <Route
                    path="/profile-page"
                    render={(props) => <ProfilePage {...props} />}
                />
                <Route path="/sections" render={(props) => <Sections {...props} />} />
                <Route path="/sign-up" render={(props) => <SignupPage {...props} />} />
                <Route path="/" render={(props) => <Home {...props} />} />
                <Redirect to="/" />
            </Switch>
            <FooterDefault />
        </>
    )
}

export default App
