import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => pug`
  div Dashboard component`;

const AddExpensePage = ()  => pug`
  div Add expense component`;

const EditExpensePage = () => pug`
  div Edit expense component`;

const HelpPage = () => pug`
  div Help component`;

const NotFoundPage = () => pug`
  div 404!
    Link(to='/') Home`;

const Header = () => pug`
  header
    h1 Expensify
    NavLink(to='/', activeClassName='is-active', exact=${true}) Dashboard
    NavLink(to='/create', activeClassName='is-active') Create Expense
    NavLink(to='/edit', activeClassName='is-active') Edit Expense
    NavLink(to='/help', activeClassName='is-active') Help`;

const AppRouter = pug`
  BrowserRouter
  div
    Header
    Switch
      Route(path='/', component=${ExpenseDashboardPage}, exact=${true})
      Route(path='/create', component=${AddExpensePage})
      Route(path='/edit', component=${EditExpensePage})
      Route(path='/help', component=${HelpPage})
      Route(component=${NotFoundPage})`;

export { AppRouter as default };