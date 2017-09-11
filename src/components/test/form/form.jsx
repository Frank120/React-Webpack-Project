import React from 'react';
import Style from './form.scss';
import Validation from 'jquery-validation';
import {Img} from './images/4.jpg'

const From = React.createClass({
    getInitiastate(){
        return {
            uploadedFile : '',
            uploadedFileGetUrl : ''
        }
    },

    error() {
        alert('error');
    },

    callback(result) {
        this.setState({
            uploadedFile : result.uploadedFile,
            uploadedFileGetUrl : result.uploadedFileGetUrl
        })
    },

    render(){

        if (!this.state){
            this.state = {
                uploadedFile : '',
                uploadedFileGetUrl : ''
            }
        }
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

                <h2>图片上传</h2>
                <div className={Style['file-container']}>
                    <input type="file" multiple accept='image/*' onChange={this.handleFiles}></input>
                    <div className={Style['__file-list']}>
                        {
                            this.state.uploadedFileGetUrl === '' ? null :
                            <div>
                                <p>{this.state.uploadedFile}</p>
                                <img src={this.state.uploadedFileGetUrl} alt='your choose image'></img>
                            </div>
                        }
                    </div>
                </div>

            </div>
        )
    },
    componentDidMount(){
        const val = $('#user').val();
        $('#user').focus(()=>
         ( alert(val))
    );
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
                    equalTo : '#password'
                }
            },
            messages : {
                email : 'Please enter right Email',
                password : {
                    required : 'Enter Right Mail',
                    minlength: 'Your Must be at least 8 chaercters long'
                },
                confirm_password : {
                    required : 'Enter Right Mail',
                    minlength: 'Your Must be at least 8 chaercters long',
                    equalTo:'plase enter same password'
                }
            }
        });
    },

    handleFiles(e){
        const file = e.target;
        Http.post('./images/4.jpg', file, this.callback, this.error)
    }
});

export default From;

var Http = (function() {
    var http = {};
    if (typeof window.XMLHttpRequest === "undefined") {
        window.XMLHttpRequest = function() {
            // 如果是i5就用Microsoft，其他就用Msxml2
            return new window.ActiveXObject(navigator.userAgent
                    .indexOf("MSIE 5") >= 0 ? "Microsoft.XMLHTTP"
                    : "Msxml2.XMLHTTP");
        };
    }
    http.post = function(url, data,  callback, error) {
        if (typeof data === "function") {//data可以不穿值
            callback = data;
            data = null;
        }
        var timeout = setTimeout(function() {//超时设置
            error();
        }, 10000);
        var xhr = new XMLHttpRequest();
        xhr.open('post', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                clearTimeout(timeout);//清除超时
                if (xhr.status === 200){
                    //alert(xhr.responseText);
                    callback(JSON.parse(xhr.responseText));//调用回调函数
                } else {
                    error();
                }
                xhr = null;// 删除对象,防止内存溢出
            }
        };
        xhr.onerror = function() {//如果产生了错误
            clearTimeout(timeout);
            error();
        };
        xhr.send(http.formDataCode(data));
    };
    http.formDataCode = function(data) {
        var fd = new FormData();
        if (!data) {
            return null;
        }
        for ( var key in data) {
            if(data.files){
                var file=data.files[0];
                fd.append("image", file);
            }else{
                fd.append(key, data[key]);
            }
        }
        return fd;
    }
    return http;
})();
