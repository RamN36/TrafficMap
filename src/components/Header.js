import React,{Component} from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
export default class Header extends Component{
    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state={ isOpen:false};
      }
      toggle(){
        this.setState({
          isOpen:!this.state.isOpen
        });
      }
      render(){
          return(
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">{this.props.appName}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                <p>1000 traffic violations</p>
                </NavItem>              
              </Nav>
            </Collapse>
          </Navbar>
          );
      }
}