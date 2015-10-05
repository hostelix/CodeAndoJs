/**
 * Created by hostelix on 12/07/15.
 */

var Campo = React.createClass({
    render: function(){
        return(<input type={this.props.tipo}/>);
    }
});

//React.render(<Campo tipo="text" />,  document.getElementById('div-modal'));

var Modal = React.createClass({
  render : function(){
      return(
         <div className="ui modal">
            <i className="close icon"></i>
            <div className="header">
               {this.props.header}
            </div>
            
            <div className="image content">
               <div className="ui medium image">
                  <img src="/images/avatar/large/chris.jpg" />
               </div>
            
               <div className="description">
                  <div className="ui header">{this.props.description}</div>
               </div>
            </div>
         
            <div className="actions">
               <div className="ui red deny button">
                  {this.props.btn_cancel}
               </div>
               <div className="ui positive right labeled icon button">
                  {this.props.btn_submit}
                  <i className="checkmark icon"></i>
               </div>
            </div>
         </div>
      )
  }
});
