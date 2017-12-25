import React from 'react'
import NameForm from './form.jsx'
export class Order extends React.Component {
    render() {
        return (
            <div> 
	            <div>
	            Place your order
	            </div> 
	          	<div>
	          	<NameForm />
	          	</div>
            </div>
        );
    }
};

export default Order;