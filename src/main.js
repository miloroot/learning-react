// React.render(
//   <h1>Hello world!</h1>,
//   document.getElementById('wrapper')
// );

// header creation
var HeaderBox = React.createClass({
  render: function() {
    return (
      <div className="header">
        <h1>Learn React and be awesome!</h1>
      </div>
    );
  }
});
React.render(
  <HeaderBox />,
  document.getElementById('headercontainer')
);

// article creation
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <p className="commentAuthor">
          {this.props.author}
        </p>
        {this.props.children}
      </div>
    );
  }
});

// article render
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Milo Roots">This is an article.</Comment>
        <Comment author="Patrik Roots">This is yet another article.</Comment>
      </div>
    );
  }
});

// body creation
var MainBox = React.createClass({
  render: function() {
    return (
      <div className="main-contaner">
        <p>
          This is the main container!
        </p>
        <hr />
        <p>Comments:</p>
        <CommentList />
      </div>
    );
  }
});
React.render(
  <MainBox />,
  document.getElementById('maincontainer')
);

// footer creation
var FooterBox = React.createClass({
  render: function() {
    return (
      <div className="footer">
        <small>Copyright 2015 , Milo.</small>
      </div>
    );
  }
});
React.render(
  <FooterBox />,
  document.getElementById('footercontainer')
);
