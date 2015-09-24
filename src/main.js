/**
*
* TODO:
* Need to rewrite the code. <- DONE.
* Have better names and more structure. <- DONE.
* Needs to look like:
*
* <wrapper> <- DONE.
*   <header /> <- DONE.
*   <maincontainer> <- DONE.
      <posts />
    </maincontainer>
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

// menu creation
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

// posts creation
var Post = React.createClass({
  render: function() {
    return (
      <div className="post">
        <h3 className="posttitle">{this.props.title}</h3>
        <p className="postcontent">{this.props.children}</p>
      </div>
    );
  }
});

// postsList creation
var PostsList = React.createClass({
  render: function() {
    return (
      <div className="postslist">
        <Post title="First post!">Is it working?</Post>
        <Post title="Seconf post!">Second post, so I can style.</Post>
      </div>
    );
  }
});

// maincontainer creation
var MainContainer = React.createClass({
  render: function() {
    return (
      <div className="maincontainer">
        <PostsList />
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
        <Menu />
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
