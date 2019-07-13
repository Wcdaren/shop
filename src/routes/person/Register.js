import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Button, Input, Row, Col, Modal } from 'antd';
import md5 from 'blueimp-md5';
import { register } from '../../api/person';
import action from '../../store/action/index';

const FormItem = Form.Item;

class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {

        return <section className='personLoginBox'>

        </section>;
    }
}

export default Form.create()(connect(null, action.person)(Register));