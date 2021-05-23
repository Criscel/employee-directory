(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var s=a(2),r=a.n(s),n=a(16),l=a.n(n),c=(a(29),a(30),a(1));var i=function(e){return Object(c.jsx)("nav",{className:"navbar navbar-light bg-light justify-content-between",children:Object(c.jsx)("h1",{className:"navbar-brand",href:"/",children:"Employee Directory"})})};a(32);var o=function(e){return Object(c.jsx)("main",{className:"container",children:e.children})},d=a(4),u=a(17),h=a(18),m=a(24),j=a(23),b=a(19),f=a.n(b),v={getEmployee:function(){return f.a.get("https://randomuser.me/api/?results=50&nat=au")}},O=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"search-div",children:[Object(c.jsx)("span",{className:"span-label",children:" Search By: "}),"\xa0",Object(c.jsx)("div",{className:"searchbar-div",children:Object(c.jsx)("input",{className:"searchbar",placeholder:"Employee name",onChange:e.handleNameSearch})})]})})};var x=function(e){return Object(c.jsx)("div",{className:"filter",children:Object(c.jsx)("select",{id:"".concat(e.type,"-select"),className:"sort-select",defaultValue:"none",defaultChecked:"none",onChange:e.handleFilterChange,children:e.filterOptions.map((function(e){return Object(c.jsx)("option",{value:e.value,disabled:e.disabled?"disabled":"",children:e.text},e.value)}))})})},p=a(5),g=a(20),N=(a(51),[{value:"none",text:"State",disabled:!0},{value:"New South Wales",text:"New South Wales"},{value:"Victoria",text:"Victoria"},{value:"Queensland",text:"Queensland"},{value:"Western Australia",text:"Western Australia"},{value:"South Australia",text:"South Australia"},{value:"Tasmania",text:"Tasmania"},{value:"Australian Capital Territory",text:"Australian Capital Territory"},{value:"Northern Territory",text:"Northern Territory"}]),S=[{value:"none",text:"Age group",disabled:!0},{value:"0-29",text:"Under 30"},{value:"30-39",text:"30-39"},{value:"40-49",text:"40-49"},{value:"50-59",text:"50-59"},{value:"60-100",text:"Over 60"}],y=[{value:"none",text:"Category",disabled:!0},{value:"firstName",text:"First name"},{value:"lastName",text:"Last name"},{value:"age",text:"Age"}];var C=function(e){return Object(c.jsxs)("div",{className:"search-sort-filter-div",children:[Object(c.jsx)(O,{handleNameSearch:e.handleNameSearch}),Object(c.jsx)("hr",{id:"search-hr"}),Object(c.jsxs)("div",{className:"sort-filter-div",children:[Object(c.jsxs)("div",{className:"filter-div",children:[Object(c.jsx)("span",{className:"span-label",children:"Filter By: "}),Object(c.jsx)(x,{type:"state",filterOptions:N,handleFilterChange:e.handleStateFilterChange}),Object(c.jsx)(x,{type:"age",filterOptions:S,handleFilterChange:e.handleAgeFilterChange}),Object(c.jsx)("button",{id:"apply-filter-btn",className:"sort-btn",onClick:e.filterEmployees,children:Object(c.jsx)(p.b,{})}),Object(c.jsx)("button",{id:"clear-filter-btn",className:"sort-btn",onClick:e.removeFilter,children:Object(c.jsx)(p.a,{})})]}),Object(c.jsxs)("div",{className:"sort-div",children:[Object(c.jsx)("span",{className:"span-label",children:"Sort By: "}),Object(c.jsx)(x,{type:"sort",filterOptions:y,handleFilterChange:e.handleSortChange}),Object(c.jsx)("button",{id:"asc-btn",className:"sort-btn",onClick:e.sortEmployeesAsc,children:Object(c.jsx)(p.c,{})}),Object(c.jsx)("button",{id:"desc-btn",className:"sort-btn",onClick:e.sortEmployeesDesc,children:Object(c.jsx)(p.d,{})}),Object(c.jsx)("button",{id:"clear-sort-btn",className:"sort-btn",onClick:e.removeSort,children:Object(c.jsx)(g.a,{})})]})]})]})},F=a(21),A=a.n(F);a(53);var E,w=function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"img-td",children:Object(c.jsx)("img",{src:e.image,alt:"Employee: ".concat(e.firstName," ").concat(e.lastName)})}),Object(c.jsx)("td",{className:"name-td",children:e.firstName}),Object(c.jsx)("td",{className:"name-td lastName",children:e.lastName}),Object(c.jsx)("td",{className:"dob-td",children:A()(e.dob).format("D/MM/YYYY")}),Object(c.jsx)("td",{className:"address-td hide-td",children:e.address}),Object(c.jsx)("td",{className:"email-td hide-td",children:e.email}),Object(c.jsx)("td",{className:"phone-td hide-td",children:e.phone})]})},k=a(22),D=a.n(k),T=(a(54),a(7)),I=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={results:{},sortedResults:{},stateFilter:"",ageFilter:"",sortCategory:"",search:""},e.handleNameSearch=function(t){e.setState({search:t.target.value.trim().toLowerCase()},(function(){e.markInstance=new D.a(document.querySelectorAll(".name-td")),e.markInstance.unmark({done:function(){e.markInstance.mark(e.state.search)}})}));var a=t.target.value.trim().toLowerCase();if(""!==a&&e.state.results){var s=[];E.results.forEach((function(e){"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(a)&&s.push(e)}));var r={results:s};if(s.length<1)return void e.setState({results:{results:!1}});e.setState({results:r})}else e.setState({results:E})},e.handleStateFilterChange=function(t){var a=t.target.value;e.setState({stateFilter:a})},e.handleAgeFilterChange=function(t){var a=t.target.value;e.setState({ageFilter:a})},e.filterEmployees=function(t){if(t.preventDefault(),E.results){var a,s=e.state.stateFilter,r=E.results.filter((function(e){return e.location.state===s})),n=e.state.ageFilter.split("-"),l=parseInt(n[0]),c=parseInt(n[1]),i=[];if(""===s&&""===e.state.ageFilter)return;""===s?(E.results.forEach((function(e){e.dob.age>=l&&e.dob.age<=c&&i.push(e)})),a={results:i}):""===e.state.ageFilter?a={results:r}:(r.forEach((function(e){e.dob.age>=l&&e.dob.age<=c&&i.push(e)})),a={results:i}),e.setState({results:a,filtered:!0})}},e.removeFilter=function(){e.setState({results:E,stateFilter:"",ageFilter:"",filtered:!1}),document.querySelector("#state-select").value="none",document.querySelector("#age-select").value="none",document.querySelector("#sort-select").value="none"},e.handleSortChange=function(t){var a=t.target.value;e.setState({sortCategory:a})},e.sortEmployeesAsc=function(){var t,a=e.state.sortCategory,s=e.state.results.results;if(""!==a){switch(a){case"firstName":t=Object(d.a)(s).sort((function(e,t){return e.name.first>t.name.first?1:-1}));break;case"lastName":t=Object(d.a)(s).sort((function(e,t){return e.name.last>t.name.last?1:-1}));break;default:t=Object(d.a)(s).sort((function(e,t){return new Date(t.dob.date)-new Date(e.dob.date)}))}var r={results:t};e.setState({results:r})}},e.sortEmployeesDesc=function(){var t,a=e.state.sortCategory,s=e.state.results.results;if(""!==a){switch(a){case"firstName":t=Object(d.a)(s).sort((function(e,t){return t.name.first>e.name.first?1:-1}));break;case"lastName":t=Object(d.a)(s).sort((function(e,t){return t.name.last>e.name.last?1:-1}));break;default:t=Object(d.a)(s).sort((function(e,t){return new Date(e.dob.date)-new Date(t.dob.date)}))}var r={results:t};e.setState({results:r})}},e.removeSort=function(){e.setState({results:E,sortCategory:""}),console.log(E),console.log(e.state.results),document.querySelector("#sort-select").value="none"},e.abbrievateState=function(e){switch(e){case"New South Wales":return"NSW";case"Victoria":return"VIC";case"Queensland":return"QLD";case"Western Australia":return"WA";case"South Australia":return"SA";case"Tasmania":return"TAS";case"Australian Capital Territory":return"ACT";default:return"NT"}},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.getEmployee().then((function(t){e.setState({results:t.data}),E=e.state.results,console.log(e.state.results)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"main-div",children:[Object(c.jsx)(C,{handleNameSearch:this.handleNameSearch,handleStateFilterChange:this.handleStateFilterChange,handleAgeFilterChange:this.handleAgeFilterChange,filterEmployees:this.filterEmployees,removeFilter:this.removeFilter,handleSortChange:this.handleSortChange,sortEmployeesAsc:this.sortEmployeesAsc,sortEmployeesDesc:this.sortEmployeesDesc,removeSort:this.removeSort}),Object(c.jsx)("div",{className:"table-div",children:Object(c.jsxs)("table",{className:"employee-table",children:[Object(c.jsxs)("thead",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{id:"th-2",className:"img img-th th",rowSpan:"2",children:"PHOTO"}),Object(c.jsx)("th",{id:"th-1",className:"name name-th th",colSpan:"2"}),Object(c.jsx)("th",{id:"th-3",className:"dob dob-th th",rowSpan:"2",children:"DOB"}),Object(c.jsx)("th",{id:"th-4",className:"address address-th th hide-th",rowSpan:"2",children:"ADDRESS"}),Object(c.jsx)("th",{id:"th-5",className:"email email-th th hide-th",rowSpan:"2",children:"EMAIL"}),Object(c.jsx)("th",{id:"th-6",className:"phone phone-th th hide-th",rowSpan:"2",children:"MOBILE"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"first-th th",children:"FIRST"}),Object(c.jsx)("th",{className:"last-th th",children:"LAST"})]})]}),Object(c.jsx)("tbody",{className:"search-results",children:this.state.results.results?this.state.results.results.map((function(t){return Object(c.jsx)(w,{image:t.picture.medium,firstName:t.name.first,lastName:t.name.last,dob:t.dob.date,address:"".concat(t.location.street.number," ").concat(t.location.street.name,", ").concat(t.location.city,", ").concat(e.abbrievateState(t.location.state)),email:t.email,phone:t.cell},"key-".concat(e.state.results.results.indexOf(t)))})):Object(c.jsx)("tr",{children:Object(c.jsxs)("td",{id:"no-employees",colSpan:"7",children:[Object(c.jsx)(T.a,{})," NO EMPLOYEES TO DISPLAY ",Object(c.jsx)(T.a,{})]})})})]})})]})}}]),a}(s.Component);var L=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(i,{}),Object(c.jsx)(o,{children:Object(c.jsx)(I,{})})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),r(e),n(e),l(e)}))};a(55);l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),W()}},[[56,1,2]]]);
//# sourceMappingURL=main.4d647ac6.chunk.js.map