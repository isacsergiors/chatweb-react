import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Login extends Component {

   render() {

      return (
         <div id="panel-login">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="nome" />
            <button>Entrar</button>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators({}, dispatch)
}

export default connect((state) => ({
   

}), mapDispatchToProps)(Login)