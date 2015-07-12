/**
 * Created by hostelix on 12/07/15.
 */

var Campo = React.createClass({
    render: function(){
        return(<input type={this.props.tipo}/>);
    }
});

React.render(<Campo tipo="text" />, document.getElementById("campo-nombre"));