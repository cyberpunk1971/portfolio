import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import About from '../src/components/About';
import Backdrop from '../src/components/Backdrop';
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';
import Portfolio from '../src/components/Portfolio';
import Sidedrawer from '../src/components/Sidedrawer';
import Toolbar from '../src/components/Toolbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from '../src/components/Footer';

library.add(fab, faEnvelope);

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sideDrawerOpen: false,
      modalOpen: false
    };
  }
 

  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.backdropClickHandler()
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  clickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  modalClickHandler = () => {
    this.setState((prevState) => {
      return { modalOpen: !prevState.modalOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen || this.state.modalOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (

      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.clickHandler} clicked={this.modalClickHandler} />
        <Sidedrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <Modal show={this.state.modalOpen} clicked={this.modalClickHandler}>
          <ContactForm />
        </Modal>
        <main style={{ marginTop: "64px" }}>

        </main>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Home" component={Portfolio} />
        <Footer />
      </div>

    )
  }
}

export default withRouter(App);
