/**
*
* TODO:
* Need to rewrite the code.
* Have better names and more structure.
* Needs to look like:
*
* <wrapper>
*   <header />
*   <maincontainer />
*   <footer />
* </wrapper>
*
**/

// header creation
var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <h1>Learning React!</h1>
      </header>
    );
  }
});

var Menu = React.createClass({
  render: function() {
    return (
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    );
  }
});

// maincontainer creation
var MainContainer = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <Menu />
        <p>This is the .main-container</p>
      </div>
    );
  }
});

// footer creation
var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <small>Copyright 2015. MiloRootCode.</small>
      </footer>
    );
  }
});

// wrapper creation
var Wrapper = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    );
  }
});
React.render(
  <Wrapper />,
  document.getElementById('content')
);
