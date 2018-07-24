import React from 'react' ;
import{BrowserRouter ,Route,Switch ,Link ,NavLink} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Store from '../components/Store' ;
import Item from '../components/Item';
import AddItemPage from '../components/AddItem';
import ItemsDashboard from '../components/ItemsDashboard';
import EditItemPage from '../components/EditItem';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navbar/>
            <Switch>
                <Route path="/" component={Store} exact={true} />
                <Route path="/about" component={AboutUs} />
                <Route path="/item/:id" component={Item}/>
                <Route path="/dashboard" component={ItemsDashboard}/>
                <Route path="/addItem" component={AddItemPage} />
                <Route path="/edit/:id" component={EditItemPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)
export default AppRouter ;