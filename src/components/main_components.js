import React, { Component } from "react";
import "./main_styles.css";
class Main extends Component {
  state = {
    firstName: "",
    lastName: "",
    department: "",
    license: "",
    presistent: false,
    profiles: false,
    updates: false,
    check: false,
    proofing: false,
    edits: false
  };

  toggle(e) {
    let togglerStatus = this.state[e];
    this.setState({
      [e]: !togglerStatus
    });
  }
  formHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="main">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="firstName">FirstName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cheryl"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.formHandler}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="Job">LastName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Chase"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.formHandler}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="license">License</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ADAS-ASFSR-GTHYR-ERGHY-PKGTY"
                  name="license"
                  value={this.state.license}
                  onChange={this.formHandler}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select
                  className="form-control bg-secondary"
                  name="department"
                  value={this.state.department}
                  onChange={this.formHandler}
                >
                  <option value="Litation">Litation</option>
                  <option value="Law">Law</option>
                </select>
              </div>
            </div>

            <div className="row ">
              <div className="col-sm-6">
                <div className="card text-center">
                  <i className="far fa-user fa-5x" />
                  <p>Presist Settings</p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="switch-input"
                      value={this.state.presistent}
                      onClick={() => this.toggle("presistent")}
                    />
                    <span className="switch-label" />
                    <span className="switch-handle" />
                  </label>
                  <p>Enable Profiles</p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="switch-input"
                      value={this.state.profiles}
                      onClick={() => this.toggle("profiles")}
                    />
                    <span
                      className="switch-label"
                      data-on="On"
                      data-off="Off"
                    />
                    <span className="switch-handle" />
                  </label>
                  <p>Auto Update</p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="switch-input"
                      value={this.state.updates}
                      onClick={() => this.toggle("updates")}
                    />
                    <span
                      className="switch-label"
                      data-on="On"
                      data-off="Off"
                    />
                    <span className="switch-handle" />
                  </label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card text-center">
                  <i className="fas fa-binoculars fa-5x" />
                  <p>Legal Check</p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="switch-input"
                      value={this.state.check}
                      onClick={() => this.toggle("check")}
                    />
                    <span
                      className="switch-label"
                      data-on="On"
                      data-off="Off"
                    />
                    <span className="switch-handle" />
                  </label>
                  <p>Check Proofing</p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="switch-input"
                      value={this.state.proofing}
                      onClick={() => this.toggle("proofing")}
                    />
                    <span
                      className="switch-label"
                      data-on="On"
                      data-off="Off"
                    />
                    <span className="switch-handle" />
                  </label>
                  <p>Check Edits</p>

                  <label className="switch">
                    <input
                      type="checkbox"
                      className="switch-input"
                      value={this.state.edits}
                      onClick={() => this.toggle("edits")}
                    />
                    <span
                      className="switch-label"
                      data-on="On"
                      data-off="Off"
                    />
                    <span className="switch-handle" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="lists">
          <h1 className="title">
            Lorem Ipsum passages, and more recently with desktop publishing
            software
          </h1>
          <p className="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
