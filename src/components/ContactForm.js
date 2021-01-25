import React from "react";

import classes from './ContactForm.module.css';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <>
        <form
          className={classes.Contact_form}
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xoqpyzvn"
          method="POST"
        >
          {this.props.children}
          <h1 className={classes.Contact_label}>Contact:</h1>
          <label className={classes.Contact_label}>Email:</label>
          <input className={classes.Contact_email} type="email" name="email" />
          <label className={classes.Contact_label}>Message:</label>
          <textarea rows="10" name="message" className={classes.Contact_msg} />
          {status === "SUCCESS" ? <p>Thanks!</p> : <button className={classes.Button}>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}