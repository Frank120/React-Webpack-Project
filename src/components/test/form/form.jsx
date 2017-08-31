import React from 'react';
import Style from './form.scss';
import Validation from 'jquery-validation';

const From = React.createClass({
    render(){
        return(
            <div className="container">
                <form method="get" action>
                    <ul className={Style['li-content']}>
                        <li>
                            <label htmlFor="user" className={Style['__label']}>user :</label>
                            <input required type="email" name="email" id="user" className={Style['__input']} placeholder="please enter your email"/>
                        </li>
                        <li>
                            <label htmlFor="password" className={Style['__label']}>password :</label>
                            <input required type="text" name="password" minLength='4' id="password" className={Style['__input']} placeholder="please enter your password"/>
                        </li>
                        <li>
                            <label htmlFor="password" className={Style['__label']}>Confirm :</label>
                            <input required type="text" name="confirm_password" minLength='4' id="password" className={Style['__input']} placeholder="please confirm your password"/>
                        </li>
                    </ul>

                    <input type="submit" className={Style['submit']} value='submit'/>
                </form>

            </div>
        )
    },
    componentDidMount(){
        $('form').validate({
            rules : {
                email : {
                    required : /^(\w)+(\.\w+)*@(\w)+((\.\{w2,3}){1,3})$/,
                    email: true
                },
                password : {
                    required : true,
                    minlength : 5
                },
                confirm_password : {
                    required : true,
                    minlength : 5,
                    equalTo : "#password"
                }
            },
            messages : {
                email : 'Please enter right Email',
                password : {
                    required : "Enter Right Mail",
                    minlength: "Your Must be at least 8 chaercters long",
                },
                confirm_password : {
                    required : "Enter Right Mail",
                    minlength: "Your Must be at least 8 chaercters long",
                    equalTo:"plase enter same password"
                }
            }
        });

        console.log(Validation)
    }
});

export default From;