var USER_DATA = {
    name: 'Jubril Issa',
    username: 'andela-ijubril',
    image: 'https://avatars0.githubusercontent.com/u/2933430?v=3$s=460'
}

var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');


var ProfilePic = React.createClass({
    render: function() {
        return <img src={this.props.imageUrl} style={{height: 100, width:100}} />
    }
});

var Link = React.createClass({
    changeURL: function(){
        window.location.replace(this.props.href);
    },
    render: function(){
        return (
            <span 
                style={{color: 'blue', cursor: 'pointer'}}
                onClick={this.changeURL}>
                {this.props.children}
            </span>
        )
    }
})


var ProfileLink = React.createClass({
    render: function(){
        return (
            <div>
                <Link href={'https://github.com/' + this.props.username}>
                    {this.props.username}
                </Link>
            </div>
        )
    }
});


var ProfileName = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
});


var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
});


var HelloWorld = React.createClass({
    render: function() {
        console.log(this.props);
        return(
            <div>Hello World {this.props.name} {this.props.anything}</div>
        )
    }
});

// ReactDom.render(
//     <HelloWorld name='jubril' anything={29}/>,
//     document.getElementById('app')
// )

// ReactDom.render(
//     <Avatar user={USER_DATA}/>,
//     document.getElementById('app')
// )
ReactDom.render(
    routes,
    document.getElementById('app')
)