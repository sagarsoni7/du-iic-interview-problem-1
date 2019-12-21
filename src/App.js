import React, { Component } from "react";
import NavBar from "./components/navbar";
import HeaderBreadcrumb from "./components/headerBreadcrumb";
import AddCaseModal from "./components/modals/addCase";
import SearchModal from "./components/modals/search";
import NotifyModal from "./components/modals/notify";
import LoginModal from "./components/modals/login";
import DeleteCase from "./components/modals/deleteCase";
import ViewCase from "./components/modals/viewCase";
import EditCase from "./components/modals/editCase";
import ExportDataModal from "./components/modals/exportData";
import FeatureNotAvailModal from "./components/modals/featureNotAvail";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.handleSingleCaseDelete = this.handleSingleCaseDelete.bind(this);

    this.handleAddNewCase = this.handleAddNewCase.bind(this);
    this.handleFilterByCaseNumberChange = this.handleFilterByCaseNumberChange.bind(
      this
    );
    this.hanldeNewCaseInputChange = this.hanldeNewCaseInputChange.bind(this);
    this.handleEditCaseInputChange = this.handleEditCaseInputChange.bind(this);
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
          title: "Haryana Recruitment",
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

  handleEditCaseInputChange(event) {
    //check if we are getting values from input field
    if (event.target.name && event.target.value) {
      //create copy of state, update it and set state
      var stateCopy = Object.assign({}, this.state);
      stateCopy.cases[this.state.currentlySelected] = {
        ...stateCopy.cases[this.state.currentlySelected],
        [event.target.name]: event.target.value
      };
      this.setState(stateCopy);
    }
  }

  hanldeNewCaseInputChange(event) {
    //check if we are getting values from input field
    if (event.target.name && event.target.value) {
      //create copy of state, update it and set state
      var stateCopy = Object.assign({}, this.state);
      stateCopy.newCase = {
        ...stateCopy.newCase,
        [event.target.name]: event.target.value
      };
      this.setState(stateCopy);
    }
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
    if (this.state.cases.length === 1) {
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
      e => e.number === event.target.value
    );
    if (event.target.value === "") {
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
        <div className="d-flex align-items-stretch ">
         <NavBar/>
          <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
              <section className="py-3">
                <div className="row">
                  <div className="col-xl-9 col-lg-9 mb-3 mb-xl-0">
                    <div className="bg-white p-1 h-100 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center">
                       <HeaderBreadcrumb/>
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
                            {this.state.cases.length === 0
                              ? "<h3>No Cases</h3>"
                              : this.state.cases.map((cases, index) => (
                                  <tr key={index}>
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
                                            this.handleShowForDelete(
                                              "delete",
                                              index
                                            )
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
        <AddCaseModal show={this.state.show==="add"} onHide={this.handleClose} hanldeNewCaseInputChange={this.hanldeNewCaseInputChange} handleAddNewCase={this.handleAddNewCase}/>

        {/* Modal For Search */}
        <SearchModal/>

        {/* Modal For Notify */}
       <NotifyModal/>
        {/* Modal For Login */}
       <LoginModal/>

        {/* Modal for deleting single case - DeleteModal */}
       <DeleteCase show={this.state.show === "delete"} onHide={this.handleClose} handleSingleCaseDelete={this.handleSingleCaseDelete}/>

        {/* Modal for viewing single case - ViewModal */}
        <ViewCase show={this.state.show === "view"} onHide={this.handleClose}
        CaseNumber={this.state.cases[this.state.currentlySelected].number}
        CaseCourt={this.state.cases[this.state.currentlySelected].court}
        CaseTitle={this.state.cases[this.state.currentlySelected].title}
        CaseAssignedTo={this.state.cases[this.state.currentlySelected].assignedTo}
        CaseStatus={this.state.cases[this.state.currentlySelected].status}
        />

        {/* Modal for editing single case - EditModal */}
        <EditCase show={this.state.show === "edit"} onHide={this.handleClose}
        handleEditCaseInputChange={this.handleEditCaseInputChange}
        CaseNumber={this.state.cases[this.state.currentlySelected].number}
        CaseCourt={this.state.cases[this.state.currentlySelected].court}
        CaseTitle={this.state.cases[this.state.currentlySelected].title}
        CaseAssignedTo={this.state.cases[this.state.currentlySelected].assignedTo}
        CaseStatus={this.state.cases[this.state.currentlySelected].status}
        />

        {/* Modal For Export */}
        <ExportDataModal/>

        {/* Modal For Feature Not Available */}
        <FeatureNotAvailModal/>
      </div>
    );
  }
}

export default App;
