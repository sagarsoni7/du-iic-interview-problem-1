(this["webpackJsonptask-one"]=this["webpackJsonptask-one"]||[]).push([[0],{25:function(e,a,t){e.exports=t(32)},32:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),n=t(8),r=t.n(n),c=t(21),o=t(16),m=t(17),i=t(22),d=t(18),u=t(3),h=t(23),E=t(35),g=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).handleShow=t.handleShow.bind(Object(u.a)(t)),t.handleClose=t.handleClose.bind(Object(u.a)(t)),t.handleCaseNumberChange=t.handleCaseNumberChange.bind(Object(u.a)(t)),t.handleCaseCourtChange=t.handleCaseCourtChange.bind(Object(u.a)(t)),t.handleCaseTitleChange=t.handleCaseTitleChange.bind(Object(u.a)(t)),t.handleCaseAssignedToChange=t.handleCaseAssignedToChange.bind(Object(u.a)(t)),t.handleCaseStatusChange=t.handleCaseStatusChange.bind(Object(u.a)(t)),t.handleSingleCaseDelete=t.handleSingleCaseDelete.bind(Object(u.a)(t)),t.handleNewCaseNumberChange=t.handleNewCaseNumberChange.bind(Object(u.a)(t)),t.handleNewCaseCourtChange=t.handleNewCaseCourtChange.bind(Object(u.a)(t)),t.handleNewCaseTitleChange=t.handleNewCaseTitleChange.bind(Object(u.a)(t)),t.handleNewCaseAssignedToChange=t.handleNewCaseAssignedToChange.bind(Object(u.a)(t)),t.handleNewCaseStatusChange=t.handleNewCaseStatusChange.bind(Object(u.a)(t)),t.handleAddNewCase=t.handleAddNewCase.bind(Object(u.a)(t)),t.handleFilterByCaseNumberChange=t.handleFilterByCaseNumberChange.bind(Object(u.a)(t)),t.state={newCase:{number:"",court:"District Court",title:"",assignedTo:"",status:"In Favour"},cases:[{number:"CWP No. 1160/2010",court:"High Court",title:"Demo Case title",assignedTo:"XYZ",status:"In Favour"},{number:"HR24K5626",court:"Supreme Court",title:"Nirbhya Rape Case",assignedTo:"Bhavya Jain",status:"Against"},{number:"HJFD5125",court:"High Court",title:"Delhi Rape Case",assignedTo:"Pankaj Goenka",status:"In Favour"},{number:"PNBHD5232",court:"Supreme Court",title:"CAB Petition",assignedTo:"Sagar Soni",status:"In Favour"},{number:"HFJFKD32365",court:"District Court",title:"NRC Petition",assignedTo:"Gaurav Ranka",status:"Against"},{number:"YUFBDJ235",court:"High Court",title:"Sagar VS State of Haryana",assignedTo:"Shukla Kumar",status:"In Favour"},{number:"HDNFN3216",court:"Supreme Court",title:"India Against Corruption",assignedTo:"Rohit Kumar",status:"Against"},{number:"QYEBEJN32",court:"District Court",title:"House Rental",assignedTo:"Ayushi Pandey",status:"Against"},{number:"JFJHJF6256",court:"High Court",title:"Old Credit",assignedTo:"Saumya Agarwal",status:"In Favour"}],currentlySelected:0,toDelete:0,show:null,filterByCaseNumber:"",filterFailMsg:""},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"setCurrentView",value:function(e){this.setState({currentView:e})}},{key:"setCurrentEdit",value:function(e){this.setState({currentEdit:e})}},{key:"setCurrentDelete",value:function(e){this.setState({currentDelete:e})}},{key:"handleClose",value:function(){this.setState({show:null})}},{key:"handleShow",value:function(e,a){this.setState({show:e,currentlySelected:a})}},{key:"handleShowForDelete",value:function(e,a){this.setState({show:e,toDelete:a})}},{key:"handleCaseNumberChange",value:function(e){var a=Object.assign({},this.state);a.cases[this.state.currentlySelected].number=e.target.value,this.setState(a)}},{key:"handleCaseCourtChange",value:function(e){var a=Object.assign({},this.state);a.cases[this.state.currentlySelected].court=e.target.value,this.setState(a)}},{key:"handleCaseTitleChange",value:function(e){var a=Object.assign({},this.state);a.cases[this.state.currentlySelected].title=e.target.value,this.setState(a)}},{key:"handleCaseAssignedToChange",value:function(e){var a=Object.assign({},this.state);a.cases[this.state.currentlySelected].assignedTo=e.target.value,this.setState(a)}},{key:"handleCaseStatusChange",value:function(e){var a=Object.assign({},this.state);a.cases[this.state.currentlySelected].status=e.target.value,this.setState(a)}},{key:"handleNewCaseNumberChange",value:function(e){var a=Object.assign({},this.state);a.newCase.number=e.target.value,this.setState(a)}},{key:"handleNewCaseCourtChange",value:function(e){var a=Object.assign({},this.state);a.newCase.court=e.target.value,this.setState(a)}},{key:"handleNewCaseTitleChange",value:function(e){var a=Object.assign({},this.state);a.newCase.title=e.target.value,this.setState(a)}},{key:"handleNewCaseAssignedToChange",value:function(e){var a=Object.assign({},this.state);a.newCase.assignedTo=e.target.value,this.setState(a)}},{key:"handleNewCaseStatusChange",value:function(e){var a=Object.assign({},this.state);a.newCase.status=e.target.value,this.setState(a)}},{key:"handleAddNewCase",value:function(){var e=Object.assign({},this.state);e.cases.push({number:this.state.newCase.number,court:this.state.newCase.court,title:this.state.newCase.title,assignedTo:this.state.newCase.assignedTo,status:this.state.newCase.status}),this.setState(e),this.handleClose()}},{key:"handleSingleCaseDelete",value:function(){if(1==this.state.cases.length)return alert("You cannot delete all cases"),this.handleClose(),null;var e=Object(c.a)(this.state.cases);e.splice(this.state.toDelete,1),this.setState({cases:e,toDelete:0,currentlySelected:0}),this.handleClose()}},{key:"handleFilterByCaseNumberChange",value:function(e){var a=this.state.cases.filter((function(a){return a.number==e.target.value}));""!=e.target.value?a.length>0?this.setState({cases:a,filterFailMsg:""}):this.setState({filterFailMsg:"Could not find anything with this filter. Please enter exact Case No."}):window.location.reload()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"d-flex align-items-stretch "},s.a.createElement("div",{id:"sidebar",className:"sidebar py-3 shadow-sm"},s.a.createElement("a",{href:"#",className:"navbar-brand font-weight-bold  text-base sidebar-toggler mr-4 mr-lg-5 lead to-right","data-toggle":"collapse","data-target":".HideThisOnCollapse"},s.a.createElement("span",{className:"HideThisOnCollapse panel-collapse  collapsed collapse show"},"UIMS Portal \xa0"),s.a.createElement("i",{className:"fas fa-angle-left"})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("ul",{className:"sidebar-menu list-unstyled"},s.a.createElement("li",{className:"sidebar-list-item"},s.a.createElement("a",{href:"#",className:" sidebar-link text-muted","data-toggle":"collapse","data-target":".HideThisCollapse"},s.a.createElement("i",{className:"fas fa-chart-pie mr-3"}),s.a.createElement("span",{className:"HideThisOnCollapse panel-collapse  collapsed collapse show"},"Portal Dashboard"))),s.a.createElement("li",null),s.a.createElement("li",{className:"sidebar-list-item"},s.a.createElement("a",{href:"#","data-toggle":"collapse","data-target":"#pages","aria-expanded":"false","aria-controls":"pages",className:"sidebar-link text-muted active"},s.a.createElement("i",{className:"fas fa-balance-scale mr-3"}),s.a.createElement("span",null,"Legal Cases")),s.a.createElement("div",{id:"pages",className:"collapse show"},s.a.createElement("ul",{className:"sidebar-menu list-unstyled border-left border-primary"},s.a.createElement("li",{className:"sidebar-list-item"},s.a.createElement("a",{href:"#",className:"sidebar-link text-muted pl-lg-5"},"Dashboard")),s.a.createElement("li",{className:"sidebar-list-item"},s.a.createElement("a",{href:"#",className:"sidebar-link text-muted pl-lg-5 active sublink"},"Manage Cases"))))))),s.a.createElement("div",{className:"page-holder w-100 d-flex flex-wrap"},s.a.createElement("div",{className:"container-fluid px-xl-5"},s.a.createElement("section",{className:"py-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-9 col-lg-9 mb-3 mb-xl-0"},s.a.createElement("div",{className:"bg-white p-1 h-100 d-flex align-items-center justify-content-between shadow-sm"},s.a.createElement("div",{className:"flex-grow-1 d-flex align-items-center"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:"#"},"Home")),s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:"#"},"Legal Cases")),s.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Manage Cases"))))),s.a.createElement("div",{className:"col-xl-1 col-lg-5 mb-4 mb-xl-0"},s.a.createElement("div",{className:"bg-white  p-3 h-100 d-flex align-items-center justify-content-between shadow-sm "},s.a.createElement("div",{className:"flex-grow-1 d-flex align-items-center "},s.a.createElement("div",{className:"icon","data-toggle":"modal","data-target":"#SearchModal"},s.a.createElement("i",{className:"fas fa-search fa-2x"}))))),s.a.createElement("div",{className:"col-xl-1 col-lg-5 mb-4 mb-xl-0"},s.a.createElement("div",{className:"bg-white  p-3 h-100 d-flex align-items-center justify-content-between shadow-sm"},s.a.createElement("div",{className:"flex-grow-1 d-flex align-items-center"},s.a.createElement("div",{className:"icon ","data-toggle":"modal","data-target":"#NotifyModal"},s.a.createElement("i",{className:"fas fa-bell fa-2x"}))))),s.a.createElement("div",{className:"col-xl-1 col-lg-5 mb-4 mb-xl-0"},s.a.createElement("div",{className:"bg-white  p-3 h-100 d-flex align-items-center justify-content-between shadow-sm"},s.a.createElement("div",{className:"flex-grow-1 d-flex align-items-center"},s.a.createElement("div",{className:"icon ","data-toggle":"modal","data-target":"#LoginModal"},s.a.createElement("i",{className:"fas fa-user-circle fa-2x"}))))))),s.a.createElement("section",{className:"py-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-12 col-lg-12 mb-3 mb-xl-0"},s.a.createElement("div",{className:"bg-white p-1 h-100 d-flex align-items-center justify-content-between shadow-sm"},s.a.createElement("div",{className:"flex-grow-1 d-flex align-items-center"},s.a.createElement("h3",{className:"mb-0 d-flex align-items-center p-4"},"Manage Cases"),s.a.createElement("a",{href:"#",className:"mb-0 d-flex align-items-center p-4 headingNavigator"}," ","Go Back to Legal Cases Dashboard"),s.a.createElement("div",{className:"mb-0 d-flex align-items-center p-4 headingNavigator ml-auto"},s.a.createElement("button",{type:"button",className:"btn  btn-secondary text-uppercase",onClick:function(){return e.handleShow("add",0)}},s.a.createElement("i",{className:"fas fa-plus mr-2"})," Add Hearing Details"),"\xa0",s.a.createElement("button",{type:"button",className:"btn  btn-primary text-uppercase",onClick:function(){return e.handleShow("add",0)}},s.a.createElement("i",{className:"fas fa-plus mr-2"})," Add Case"))))))),s.a.createElement("section",{className:"py-3 shadow-sm"},s.a.createElement("div",{className:"row "},s.a.createElement("div",{className:"col-lg-12 mb-4 "},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("p",null,s.a.createElement("span",{className:"flex-grow-1 d-flex align-items-center"},s.a.createElement("b",null,"Show \xa0"),s.a.createElement("select",{name:"account","data-toggle":"modal","data-target":"#NotAvailableModal",className:"form-control"},s.a.createElement("option",null,"All Cases"),s.a.createElement("option",null,"Hearing: This Week"),s.a.createElement("option",null,"Hearing: Next Week"),s.a.createElement("option",null,"In Favour Cases"),s.a.createElement("option",null,"Against Cases"),s.a.createElement("option",null,"Supreme Court Cases"),s.a.createElement("option",null,"High Court Cases")),"\xa0 \xa0 \xa0Showing"," ",s.a.createElement("b",null,"\xa0 1-",this.state.cases.length," of"," ",this.state.cases.length," items"),s.a.createElement("span",{className:"mb-0 d-flex align-items-center p-4 headingNavigator ml-auto"},s.a.createElement("select",{name:"account","data-toggle":"modal","data-target":"#NotAvailableModal",className:"form-control widthIsSixty"},s.a.createElement("option",null,"Toggle All Columns"),s.a.createElement("option",null,"Delete All Columns"))," ","\xa0",s.a.createElement("span",{className:"btn btn-secondary text-uppercase","data-toggle":"modal","data-target":"#ExportModal"},s.a.createElement("i",{className:"fas fa-download mr-2"}),"Export All"),"\xa0"))),s.a.createElement("p",{style:{color:"red"}},this.state.filterFailMsg),s.a.createElement("table",{className:"table card-text"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Sr"),s.a.createElement("th",null,"Case No."),s.a.createElement("th",null,"Court"),s.a.createElement("th",null,"Case Title"),s.a.createElement("th",null,"Assigned To"),s.a.createElement("th",null,"Case Status"),s.a.createElement("th",null,"Details"),s.a.createElement("th",null,"Modify"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"}),s.a.createElement("td",null,s.a.createElement("input",{type:"text",onChange:this.handleFilterByCaseNumberChange,placeholder:"Filter by Case No.",className:"form-control textInputInTable"})),s.a.createElement("td",null,s.a.createElement("select",{"data-toggle":"modal","data-target":"#NotAvailableModal",name:"account",className:"form-control textInputInTable"},s.a.createElement("option",null,"All"),s.a.createElement("option",null,"District Court (DC)"),s.a.createElement("option",null,"High Court (HC)"),s.a.createElement("option",null,"Supreme Court (SC)"))),s.a.createElement("td",null,s.a.createElement("input",{type:"text",placeholder:"Filter by Case Title","data-toggle":"modal","data-target":"#NotAvailableModal",className:"form-control textInputInTable"})),s.a.createElement("td",null,s.a.createElement("input",{type:"text",placeholder:"Filter by Assigned","data-toggle":"modal","data-target":"#NotAvailableModal",className:"form-control textInputInTable"})),s.a.createElement("td",null,s.a.createElement("select",{name:"account","data-toggle":"modal","data-target":"#NotAvailableModal",className:"form-control textInputInTable"},s.a.createElement("option",null,"All"),s.a.createElement("option",null,"In Favour"),s.a.createElement("option",null,"Against"))),s.a.createElement("td",null),s.a.createElement("td",null," ")),0==this.state.cases.length?"<h3>No Cases</h3>":this.state.cases.map((function(a,t){return s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},t+1),s.a.createElement("td",null,a.number),s.a.createElement("td",null,a.court),s.a.createElement("td",null,a.title),s.a.createElement("td",null,a.assignedTo),s.a.createElement("td",null,a.status),s.a.createElement("td",null,s.a.createElement("span",{onClick:function(){return e.handleShow("view",t)}},"View")),s.a.createElement("td",null,s.a.createElement("span",{className:"form-inline"},s.a.createElement("i",{onClick:function(){return e.handleShow("edit",t)},className:"fas fa-edit mr-2"})," ",s.a.createElement("i",{onClick:function(){return e.handleShowForDelete("delete",t)},className:"fas fa-trash mr-2"}))))}))))))))),s.a.createElement("section",{className:"py-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-12 col-lg-12 mb-3 mb-xl-0"},s.a.createElement("div",{className:"bg-white p-1 h-100 d-flex align-items-center justify-content-between shadow-sm"},s.a.createElement("div",{className:"flex-grow-1 d-flex align-items-center p-2"},s.a.createElement("span",null,"Built with \u2764\ufe0f by"," ",s.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/mesagarsoni/"},"Sagar Soni")," ","as a part of IIC, DU interview process."))))))))),s.a.createElement(E.a,{show:"add"==this.state.show,onHide:this.handleClose},s.a.createElement(E.a.Header,{closeButton:!0,closeLabel:"close window"},s.a.createElement("h4",{className:"modal-title"},"Add Case ")),s.a.createElement(E.a.Body,null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Case No.: \xa0"),s.a.createElement("input",{type:"text",onChange:this.handleNewCaseNumberChange,placeholder:"Enter Case No.",className:"form-control width80"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Select Court:\xa0"),s.a.createElement("select",{name:"account",onChange:this.handleNewCaseCourtChange,className:"form-control width50"},s.a.createElement("option",null,"District Court"),s.a.createElement("option",null,"High Court"),s.a.createElement("option",null,"Supreme Court")))," ",s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Case Title:\xa0"),s.a.createElement("input",{type:"text",onChange:this.handleNewCaseTitleChange,placeholder:"Enter Case Title",className:"form-control width80"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Assigned:\xa0"),s.a.createElement("input",{onChange:this.handleNewCaseAssignedToChange,type:"text",placeholder:"Enter Assignee",className:"form-control width80"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Case Status:\xa0"),s.a.createElement("select",{onChange:this.handleNewCaseStatusChange,name:"account",className:"form-control width50"},s.a.createElement("option",null,"In Favour"),s.a.createElement("option",null,"Against")))),s.a.createElement(E.a.Footer,null,s.a.createElement("button",{onClick:this.handleAddNewCase,type:"submit",className:"btn btn-primary m-3"},"Add Case"))),s.a.createElement("div",{className:"modal",id:"SearchModal"},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h4",{className:"modal-title"},"Search Case"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),s.a.createElement("div",{className:"modal-body"},s.a.createElement("form",{className:"form-inline"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{id:"inlineFormInputGroup",type:"text",placeholder:"Enter Case to search for",className:"mr-3 form-control width80"}))),s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",{className:"redText"},"This functionality is not available at the moment")),s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",{className:"redText"},"Please use search filter inside table"))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Search"),s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))),s.a.createElement("div",{className:"modal",id:"NotifyModal"},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h4",{className:"modal-title"},"Get Notifications"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),s.a.createElement("div",{className:"modal-body"},s.a.createElement("form",{className:"form-inline"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{id:"inlineFormInputGroup",type:"text",placeholder:"Email Address",className:"mr-3 form-control width80"}))),s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",{className:"p-2 redText"},"This functionality is not available at the moment"))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Notify Me"),s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))),s.a.createElement("div",{className:"modal",id:"LoginModal"},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h4",{className:"modal-title"},"Login/SignUp"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),s.a.createElement("div",{className:"modal-body"},s.a.createElement("p",null,"Login to manage your cases."),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Email"),s.a.createElement("input",{type:"text",placeholder:"Email Address",className:"form-control width50"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{type:"password",placeholder:"Password",className:"form-control width50"}))),s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",{className:"p-2 redText"},"This functionality is not available at the moment"))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("input",{type:"submit",value:"Sign in",className:"btn btn-primary"}),s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))),s.a.createElement(E.a,{show:"delete"==this.state.show,onHide:this.handleClose},s.a.createElement(E.a.Header,{closeButton:!0,closeLabel:"close window"},s.a.createElement("h4",{className:"modal-title"},"Delete Case ")),s.a.createElement(E.a.Body,null,s.a.createElement("div",{className:"form-group"},s.a.createElement("p",null,"Are you sure you want to delete this case?"))),s.a.createElement(E.a.Footer,null,s.a.createElement("button",{onClick:this.handleSingleCaseDelete,type:"submit",className:"btn btn-primary m-3"},"Delete Case"))),s.a.createElement(E.a,{show:"view"==this.state.show,onHide:this.handleClose},s.a.createElement(E.a.Header,{closeButton:!0,closeLabel:"close window"},s.a.createElement("h4",{className:"modal-title"},"View Case ")),s.a.createElement(E.a.Body,null,s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Case No.:"," "),s.a.createElement("span",{className:"width80"},"\xa0",this.state.cases[this.state.currentlySelected].number)),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Court:"),s.a.createElement("span",{className:"width80"},"\xa0",this.state.cases[this.state.currentlySelected].court))," ",s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Case Title:"),s.a.createElement("span",{className:"width80"},"\xa0",this.state.cases[this.state.currentlySelected].title)),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Assigned To:"),s.a.createElement("span",{className:"width80"},"\xa0",this.state.cases[this.state.currentlySelected].assignedTo)),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Case Status:"),s.a.createElement("span",{className:"width80"},"\xa0",this.state.cases[this.state.currentlySelected].status))))),s.a.createElement(E.a,{show:"edit"==this.state.show,onHide:this.handleClose},s.a.createElement(E.a.Header,{closeButton:!0,closeLabel:"close window"},s.a.createElement("h4",{className:"modal-title"},"Edit Case ")),s.a.createElement(E.a.Body,null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Case No.: \xa0"),s.a.createElement("input",{type:"text",onChange:this.handleCaseNumberChange,value:this.state.cases[this.state.currentlySelected].number,placeholder:"Enter Case No.",className:"form-control width80"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Select Court:\xa0"),s.a.createElement("select",{name:"account",onChange:this.handleCaseCourtChange,value:this.state.cases[this.state.currentlySelected].court,className:"form-control width50"},s.a.createElement("option",null,"District Court"),s.a.createElement("option",null,"High Court"),s.a.createElement("option",null,"Supreme Court")))," ",s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Case Title:\xa0"),s.a.createElement("input",{type:"text",onChange:this.handleCaseTitleChange,value:this.state.cases[this.state.currentlySelected].title,placeholder:"Enter Case Title",className:"form-control width80"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Assigned:\xa0"),s.a.createElement("input",{onChange:this.handleCaseAssignedToChange,value:this.state.cases[this.state.currentlySelected].assignedTo,type:"text",placeholder:"Enter Assignee",className:"form-control width80"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"form-control-label text-uppercase"},"Case Status:\xa0"),s.a.createElement("select",{onChange:this.handleCaseStatusChange,value:this.state.cases[this.state.currentlySelected].status,name:"account",className:"form-control width50"},s.a.createElement("option",null,"In Favour"),s.a.createElement("option",null,"Against"))),"This form dynamically updates the case.",s.a.createElement("br",null)," Click outside to close window")),s.a.createElement("div",{className:"modal",id:"ExportModal"},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h4",{className:"modal-title"},"Export all Cases as JSON"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),s.a.createElement("div",{className:"modal-body"},s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",{className:"redText"},"This functionality is not available at the moment"))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Export All"),s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))),s.a.createElement("div",{className:"modal",id:"NotAvailableModal"},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h4",{className:"modal-title"},"Sagar Soni IIC Task 1"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),s.a.createElement("div",{className:"modal-body"},s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",{className:"redText"},"Sorry,This functionality is not available at the moment"))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.fd15d590.chunk.js.map