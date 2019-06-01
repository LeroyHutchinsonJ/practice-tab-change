import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import NavBar from "./NavBar";

class App extends React.Component {
  state = {
    //Holds the value of the current tab
    activeTab: 0
  };

  //Handles the tab change, sets the value of tab change to the value put in the function
  handleChangeTab = index => {
    this.setState({ activeTab: index });
    console.log(index);
  };
  render() {
    var { activeTab } = this.state;
    //If active tab is 0 then we should render the Page one component, otherwise render the page two component
    var currentPage = activeTab === 0 ? <PageOne /> : <PageTwo />;

    return (
      <div>
        <NavBar handleTabChange={this.handleChangeTab} />
        {currentPage}
      </div>
    );
  }
}
export default App;
