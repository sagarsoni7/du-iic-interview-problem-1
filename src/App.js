import React, { Component } from "react";
import { Modal } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCaseNumberChange = this.handleCaseNumberChange.bind(this);
    this.handleCaseCourtChange = this.handleCaseCourtChange.bind(this);
    this.handleCaseTitleChange = this.handleCaseTitleChange.bind(this);
    this.handleCaseAssignedToChange = this.handleCaseAssignedToChange.bind(
      this
    );
    this.handleCaseStatusChange = this.handleCaseStatusChange.bind(this);
    this.handleSingleCaseDelete = this.handleSingleCaseDelete.bind(this);
    this.handleNewCaseNumberChange = this.handleNewCaseNumberChange.bind(this);
    this.handleNewCaseCourtChange = this.handleNewCaseCourtChange.bind(this);
    this.handleNewCaseTitleChange = this.handleNewCaseTitleChange.bind(this);
    this.handleNewCaseAssignedToChange = this.handleNewCaseAssignedToChange.bind(
      this
    );
    this.handleNewCaseStatusChange = this.handleNewCaseStatusChange.bind(this);
    this.handleAddNewCase = this.handleAddNewCase.bind(this);
    this.handleFilterByCaseNumberChange = this.handleFilterByCaseNumberChange.bind(
      this
    );
    this.state = {
      newCase: {
        number: "",
        court: "District Court",
        title: "",
        assignedTo: "",
        status: "In Favour"
      },
      cases: [
        {
          number: "CWP No. 1160/2010",
          court: "High Court",
          title: "Demo Case title",
          assignedTo: "XYZ",
          status: "In Favour"
        },
        {
          number: "HR24K5626",
          court: "Supreme Court",
          title: "Nirbhya Rape Case",
          assignedTo: "Bhavya Jain",
          status: "Against"
        },
        {
          number: "HJFD5125",
          court: "High Court",
          title: "Delhi Rape Case",
          assignedTo: "Pankaj Goenka",
          status: "In Favour"
        },
        {
          number: "PNBHD5232",
          court: "Supreme Court",
          title: "CAB Petition",
          assignedTo: "Sagar Soni",
          status: "In Favour"
        },
        {
          number: "HFJFKD32365",
          court: "District Court",
          title: "NRC Petition",
          assignedTo: "Gaurav Ranka",
          status: "Against"
        },
        {
          number: "YUFBDJ235",
          court: "High Court",
          title: "Sagar VS State of Haryana",
          assignedTo: "Shukla Kumar",
          status: "In Favour"
        },
        {
          number: "HDNFN3216",
          court: "Supreme Court",
          title: "India Against Corruption",
          assignedTo: "Rohit Kumar",
          status: "Against"
        },
        {
          number: "QYEBEJN32",
          court: "District Court",
          title: "House Rental",
          assignedTo: "Ayushi Pandey",
          status: "Against"
        },
        {
          number: "JFJHJF6256",
          court: "High Court",
          title: "Old Credit",
          assignedTo: "Saumya Agarwal",
          status: "In Favour"
        }
      ],
      currentlySelected: 0,
      toDelete: 0,
      show: null,
      filterByCaseNumber: "",
      filterFailMsg: ""
    };
  }

  setCurrentView(index) {
    this.setState({
      currentView: index
    });
  }
  setCurrentEdit(index) {
    this.setState({
      currentEdit: index
    });
  }
  setCurrentDelete(index) {
    this.setState({
      currentDelete: index
    });
  }
  handleClose() {
    this.setState({ show: null });
  }

  handleShow(id, index) {
    this.setState({ show: id, currentlySelected: index });
  }
  handleShowForDelete(id, index) {
    this.setState({ show: id, toDelete: index });
  }
  handleCaseNumberChange(event) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.cases[this.state.currentlySelected].number = event.target.value;
    this.setState(stateCopy);
  }
  handleCaseCourtChange(event) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.cases[this.state.currentlySelected].court = event.target.value;
    this.setState(stateCopy);
  }
  handleCaseTitleChange(event) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.cases[this.state.currentlySelected].title = event.target.value;
    this.setState(stateCopy);
  }
  handleCaseAssignedToChange(event) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.cases[this.state.currentlySelected].assignedTo =
      event.target.value;
    this.setState(stateCopy);
  }
  handleCaseStatusChange(event) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.cases[this.state.currentlySelected].status = event.target.value;
    this.setState(stateCopy);
  }
  handleNewCaseNumberChange(event) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.newCase.number = event.target.value;
    this.setState(stateCopy);
  }
  handleNewCaseCourtChange(event) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.newCase.court = event.target.value;
    this.setState(stateCopy);
  }
  handleNewCaseTitleChange(event) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.newCase.title = event.target.value;
    this.setState(stateCopy);
  }
  handleNewCaseAssignedToChange(event) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.newCase.assignedTo = event.target.value;
    this.setState(stateCopy);
  }
  handleNewCaseStatusChange(event) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.newCase.status = event.target.value;
    this.setState(stateCopy);
  }
  handleAddNewCase() {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.cases.push({
      number: this.state.newCase.number,
      court: this.state.newCase.court,
      title: this.state.newCase.title,
      assignedTo: this.state.newCase.assignedTo,
      status: this.state.newCase.status
    });
    this.setState(stateCopy);
    this.handleClose();
  }
  handleSingleCaseDelete() {
    if (this.state.cases.length == 1) {
      alert("You cannot delete all cases");
      this.handleClose();
      return null;
    }
    var tempState = [...this.state.cases];
    tempState.splice(this.state.toDelete, 1);
    this.setState({
      cases: tempState,
      toDelete: 0,
      currentlySelected: 0
    });
    this.handleClose();
  }
  handleFilterByCaseNumberChange(event) {
    var filteredArray = this.state.cases.filter(
      e => e.number == event.target.value
    );
    if (event.target.value == "") {
      window.location.reload();
      return;
    }
    if (filteredArray.length > 0) {
      this.setState({
        cases: filteredArray,
        filterFailMsg: ""
      });
    } else {
      this.setState({
        filterFailMsg:
          "Could not find anything with this filter. Please enter exact Case No."
      });
    }
  }
  render() {
    return (
      <div>
        {/* navbar*/}
        <div className="d-flex align-items-stretch ">
          <div id="sidebar" className="sidebar py-3 shadow-sm">
            <a
              href="#"
              className="navbar-brand font-weight-bold  text-base sidebar-toggler mr-4 mr-lg-5 lead to-right"
              data-toggle="collapse"
              data-target=".HideThisOnCollapse"
            >
              <span className="HideThisOnCollapse panel-collapse  collapsed collapse show">
                UIMS Portal &nbsp;
              </span>
              <i className="fas fa-angle-left"></i>
            </a>
            <br />
            <br />
            <ul className="sidebar-menu list-unstyled">
              <li className="sidebar-list-item">
                <a
                  href="#"
                  className=" sidebar-link text-muted"
                  data-toggle="collapse"
                  data-target=".HideThisCollapse"
                >
                  <i className="fas fa-chart-pie mr-3"></i>
                  <span className="HideThisOnCollapse panel-collapse  collapsed collapse show">
                    Portal Dashboard
                  </span>
                </a>
              </li>
              <li></li>
              <li className="sidebar-list-item">
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#pages"
                  aria-expanded="false"
                  aria-controls="pages"
                  className="sidebar-link text-muted active"
                >
                  <i className="fas fa-balance-scale mr-3"></i>
                  <span>Legal Cases</span>
                </a>
                <div id="pages" className="collapse show">
                  <ul className="sidebar-menu list-unstyled border-left border-primary">
                    <li className="sidebar-list-item">
                      <a href="#" className="sidebar-link text-muted pl-lg-5">
                        Dashboard
                      </a>
                    </li>
                    <li className="sidebar-list-item">
                      <a
                        href="#"
                        className="sidebar-link text-muted pl-lg-5 active sublink"
                      >
                        Manage Cases
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
              <section className="py-3">
                <div className="row">
                  <div className="col-xl-9 col-lg-9 mb-3 mb-xl-0">
                    <div className="bg-white p-1 h-100 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="#">Home</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="#">Legal Cases</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Manage Cases
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-1 col-lg-5 mb-4 mb-xl-0">
                    <div className="bg-white  p-3 h-100 d-flex align-items-center justify-content-between shadow-sm ">
                      <div className="flex-grow-1 d-flex align-items-center ">
                        <div
                          className="icon"
                          data-toggle="modal"
                          data-target="#SearchModal"
                        >
                          <i className="fas fa-search fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-1 col-lg-5 mb-4 mb-xl-0">
                    <div className="bg-white  p-3 h-100 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center">
                        <div
                          className="icon "
                          data-toggle="modal"
                          data-target="#NotifyModal"
                        >
                          <i className="fas fa-bell fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-1 col-lg-5 mb-4 mb-xl-0">
                    <div className="bg-white  p-3 h-100 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center">
                        <div
                          className="icon "
                          data-toggle="modal"
                          data-target="#LoginModal"
                        >
                          <i className="fas fa-user-circle fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-3">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 mb-3 mb-xl-0">
                    <div className="bg-white p-1 h-100 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center">
                        <h3 className="mb-0 d-flex align-items-center p-4">
                          Manage Cases
                        </h3>
                        <a
                          href="#"
                          className="mb-0 d-flex align-items-center p-4 headingNavigator"
                        >
                          {" "}
                          Go Back to Legal Cases Dashboard
                        </a>
                        <div className="mb-0 d-flex align-items-center p-4 headingNavigator ml-auto">
                          {/* Button to Open the AddCaseModal */}
                          <button
                            type="button"
                            className="btn  btn-secondary text-uppercase"
                            onClick={() => this.handleShow("add", 0)}
                          >
                            <i className="fas fa-plus mr-2"></i> Add Hearing
                            Details
                          </button>
                          &nbsp;
                          <button
                            type="button"
                            className="btn  btn-primary text-uppercase"
                            onClick={() => this.handleShow("add", 0)}
                          >
                            <i className="fas fa-plus mr-2"></i> Add Case
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-3 shadow-sm">
                <div className="row ">
                  <div className="col-lg-12 mb-4 ">
                    <div className="card">
                      <div className="card-header">
                        <p>
                          <span className="flex-grow-1 d-flex align-items-center">
                            <b>Show &nbsp;</b>
                            <select
                              name="account"
                              data-toggle="modal"
                              data-target="#NotAvailableModal"
                              className="form-control"
                            >
                              <option>All Cases</option>
                              <option>Hearing: This Week</option>
                              <option>Hearing: Next Week</option>
                              <option>In Favour Cases</option>
                              <option>Against Cases</option>
                              <option>Supreme Court Cases</option>
                              <option>High Court Cases</option>
                            </select>
                            &nbsp; &nbsp; &nbsp;Showing{" "}
                            <b>
                              &nbsp; 1-{this.state.cases.length} of{" "}
                              {this.state.cases.length} items
                            </b>
                            <span className="mb-0 d-flex align-items-center p-4 headingNavigator ml-auto">
                              <select
                                name="account"
                                data-toggle="modal"
                                data-target="#NotAvailableModal"
                                className="form-control widthIsSixty"
                              >
                                <option>Toggle All Columns</option>
                                <option>Delete All Columns</option>
                              </select>{" "}
                              &nbsp;
                              <span
                                className="btn btn-secondary text-uppercase"
                                data-toggle="modal"
                                data-target="#ExportModal"
                              >
                                <i className="fas fa-download mr-2"></i>Export
                                All
                              </span>
                              &nbsp;
                            </span>
                          </span>
                        </p>
                        <p style={{ color: "red" }}>
                          {this.state.filterFailMsg}
                        </p>
                        <table className="table card-text">
                          <thead>
                            <tr>
                              <th>Sr</th>
                              <th>Case No.</th>
                              <th>Court</th>
                              <th>Case Title</th>
                              <th>Assigned To</th>
                              <th>Case Status</th>
                              <th>Details</th>
                              <th>Modify</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"></th>
                              <td>
                                <input
                                  type="text"
                                  onChange={this.handleFilterByCaseNumberChange}
                                  placeholder="Filter by Case No."
                                  className="form-control textInputInTable"
                                />
                              </td>
                              <td>
                                <select
                                  data-toggle="modal"
                                  data-target="#NotAvailableModal"
                                  name="account"
                                  className="form-control textInputInTable"
                                >
                                  <option>All</option>
                                  <option>District Court (DC)</option>
                                  <option>High Court (HC)</option>
                                  <option>Supreme Court (SC)</option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Filter by Case Title"
                                  data-toggle="modal"
                                  data-target="#NotAvailableModal"
                                  className="form-control textInputInTable"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Filter by Assigned"
                                  data-toggle="modal"
                                  data-target="#NotAvailableModal"
                                  className="form-control textInputInTable"
                                />
                              </td>
                              <td>
                                <select
                                  name="account"
                                  data-toggle="modal"
                                  data-target="#NotAvailableModal"
                                  className="form-control textInputInTable"
                                >
                                  <option>All</option>
                                  <option>In Favour</option>
                                  <option>Against</option>
                                </select>
                              </td>
                              <td></td>
                              <td> </td>
                            </tr>
                            {this.state.cases.length == 0
                              ? "<h3>No Cases</h3>"
                              : this.state.cases.map((cases, index) => (
                                  <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{cases.number}</td>
                                    <td>{cases.court}</td>
                                    <td>{cases.title}</td>
                                    <td>{cases.assignedTo}</td>
                                    <td>{cases.status}</td>
                                    <td>
                                      <span
                                        onClick={() =>
                                          this.handleShow("view", index)
                                        }
                                      >
                                        View
                                      </span>
                                    </td>
                                    <td>
                                      <span className="form-inline">
                                        <i
                                          onClick={() =>
                                            this.handleShow("edit", index)
                                          }
                                          className="fas fa-edit mr-2"
                                        ></i>{" "}
                                        <i
                                          onClick={() =>
                                            this.handleShowForDelete("delete", index)
                                          }
                                          className="fas fa-trash mr-2"
                                        ></i>
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-3">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 mb-3 mb-xl-0">
                    <div className="bg-white p-1 h-100 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center p-2">
                        <span>
                          Built with &#10084;&#65039; by{" "}
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/mesagarsoni/"
                          >
                            Sagar Soni
                          </a>{" "}
                          as a part of IIC, DU interview process.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* Modal For Add Hearing Details/Add Case */}
        <Modal show={this.state.show == "add"} onHide={this.handleClose}>
          <Modal.Header closeButton closeLabel="close window">
            <h4 className="modal-title">Add Case </h4>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Case No.: &nbsp;
              </label>
              <input
                type="text"
                onChange={this.handleNewCaseNumberChange}
                placeholder="Enter Case No."
                className="form-control width80"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Select Court:&nbsp;
              </label>
              <select
                name="account"
                onChange={this.handleNewCaseCourtChange}
                className="form-control width50"
              >
                <option>District Court</option>
                <option>High Court</option>
                <option>Supreme Court</option>
              </select>
            </div>{" "}
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Case Title:&nbsp;
              </label>
              <input
                type="text"
                onChange={this.handleNewCaseTitleChange}
                placeholder="Enter Case Title"
                className="form-control width80"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Assigned:&nbsp;
              </label>
              <input
                onChange={this.handleNewCaseAssignedToChange}
                type="text"
                placeholder="Enter Assignee"
                className="form-control width80"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Case Status:&nbsp;
              </label>
              <select
                onChange={this.handleNewCaseStatusChange}
                name="account"
                className="form-control width50"
              >
                <option>In Favour</option>
                <option>Against</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={this.handleAddNewCase}
              type="submit"
              className="btn btn-primary m-3"
            >
              Add Case
            </button>
          </Modal.Footer>
        </Modal>

        {/* Modal For Search */}
        <div className="modal" id="SearchModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Search Case</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="modal-body">
                <form className="form-inline">
                  <div className="form-group">
                    {/* <label for="inlineFormInputGroup" className="sr-only">Enter Case to search for</label> */}
                    <input
                      id="inlineFormInputGroup"
                      type="text"
                      placeholder="Enter Case to search for"
                      className="mr-3 form-control width80"
                    />
                  </div>
                </form>
                <div className="d-flex align-items-center">
                  <div className="redText">
                    This functionality is not available at the moment
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="redText">
                    Please use search filter inside table
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal For Notify */}
        <div className="modal" id="NotifyModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Get Notifications</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="modal-body">
                <form className="form-inline">
                  <div className="form-group">
                    {/* <label for="inlineFormInputGroup" className="sr-only">Enter Case to search for</label> */}
                    <input
                      id="inlineFormInputGroup"
                      type="text"
                      placeholder="Email Address"
                      className="mr-3 form-control width80"
                    />
                  </div>
                </form>
                <div className="d-flex align-items-center">
                  <div className="p-2 redText">
                    This functionality is not available at the moment
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Notify Me
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal For Login */}
        <div className="modal" id="LoginModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Login/SignUp</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="modal-body">
                <p>Login to manage your cases.</p>
                <form>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="form-control width50"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control width50"
                    />
                  </div>
                </form>
                <div className="d-flex align-items-center">
                  <div className="p-2 redText">
                    This functionality is not available at the moment
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="modal-footer">
                <input
                  type="submit"
                  value="Sign in"
                  className="btn btn-primary"
                />
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for deleting single case - DeleteModal */}
        <Modal show={this.state.show == "delete"} onHide={this.handleClose}>
          <Modal.Header closeButton closeLabel="close window">
            <h4 className="modal-title">Delete Case </h4>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <p>Are you sure you want to delete this case?</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={this.handleSingleCaseDelete}
              type="submit"
              className="btn btn-primary m-3"
            >
              Delete Case
            </button>
          </Modal.Footer>
        </Modal>

        {/* Modal for viewing single case - ViewModal */}
        <Modal show={this.state.show == "view"} onHide={this.handleClose}>
          <Modal.Header closeButton closeLabel="close window">
            <h4 className="modal-title">View Case </h4>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label className="form-control-label text-uppercase">
                  Case No.:{" "}
                </label>
                <span className="width80">
                  &nbsp;{this.state.cases[this.state.currentlySelected].number}
                </span>
              </div>
              <div className="form-group">
                <label className="form-control-label text-uppercase">
                  Court:
                </label>
                <span className="width80">
                  &nbsp;{this.state.cases[this.state.currentlySelected].court}
                </span>
              </div>{" "}
              <div className="form-group">
                <label className="form-control-label text-uppercase">
                  Case Title:
                </label>
                <span className="width80">
                  &nbsp;{this.state.cases[this.state.currentlySelected].title}
                </span>
              </div>
              <div className="form-group">
                <label className="form-control-label text-uppercase">
                  Assigned To:
                </label>
                <span className="width80">
                  &nbsp;
                  {this.state.cases[this.state.currentlySelected].assignedTo}
                </span>
              </div>
              <div className="form-group">
                <label className="form-control-label text-uppercase">
                  Case Status:
                </label>
                <span className="width80">
                  &nbsp;{this.state.cases[this.state.currentlySelected].status}
                </span>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        {/* Modal for editing single case - EditModal */}
        <Modal show={this.state.show == "edit"} onHide={this.handleClose}>
          <Modal.Header closeButton closeLabel="close window">
            <h4 className="modal-title">Edit Case </h4>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Case No.: &nbsp;
              </label>
              <input
                type="text"
                onChange={this.handleCaseNumberChange}
                value={this.state.cases[this.state.currentlySelected].number}
                placeholder="Enter Case No."
                className="form-control width80"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Select Court:&nbsp;
              </label>
              <select
                name="account"
                onChange={this.handleCaseCourtChange}
                value={this.state.cases[this.state.currentlySelected].court}
                className="form-control width50"
              >
                <option>District Court</option>
                <option>High Court</option>
                <option>Supreme Court</option>
              </select>
            </div>{" "}
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Case Title:&nbsp;
              </label>
              <input
                type="text"
                onChange={this.handleCaseTitleChange}
                value={this.state.cases[this.state.currentlySelected].title}
                placeholder="Enter Case Title"
                className="form-control width80"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Assigned:&nbsp;
              </label>
              <input
                onChange={this.handleCaseAssignedToChange}
                value={
                  this.state.cases[this.state.currentlySelected].assignedTo
                }
                type="text"
                placeholder="Enter Assignee"
                className="form-control width80"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Case Status:&nbsp;
              </label>
              <select
                onChange={this.handleCaseStatusChange}
                value={this.state.cases[this.state.currentlySelected].status}
                name="account"
                className="form-control width50"
              >
                <option>In Favour</option>
                <option>Against</option>
              </select>
            </div>
            This form dynamically updates the case.
            <br /> Click outside to close window
          </Modal.Body>
        </Modal>

        {/* Modal For Export */}
        <div className="modal" id="ExportModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Export all Cases as JSON</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="modal-body">
                <div className="d-flex align-items-center">
                  <div className="redText">
                    This functionality is not available at the moment
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Export All
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal For Not Available */}
        <div className="modal" id="NotAvailableModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Sagar Soni IIC Task 1</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="modal-body">
                <div className="d-flex align-items-center">
                  <div className="redText">
                    Sorry,This functionality is not available at the moment
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
