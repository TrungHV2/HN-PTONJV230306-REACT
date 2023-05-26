import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    username: 'admin',
                    email: 'admin@gmail.com',
                    phone: '0987654321',
                    password: '1234'
                },
                {
                    id: 2,
                    username: 'customer',
                    email: 'customer@gmail.com',
                    phone: '0986568799',
                    password: '1234'
                }
            ],
            values: {}
        }
    }
    handleChange = (evt) => {
        this.setState(prevState => {
            let obj = {...prevState.values};
            obj[evt.target.name] = evt.target.value;
            return { values: obj }
        })
        // this.setState({
        //     values: {...this.state.values, [evt.target.name]: evt.target.value}
        // });
        // console.log(this.state.values);
    }

    handleNew = () => {
        console.log(this.state.values);
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Thông tin tài khoản</legend>
                        <p><b>Tên tài khoản</b> <input name="username" onKeyUp={this.handleChange} type="text"/></p>
                        <p><b>Email</b> <input name="email" onKeyUp={this.handleChange} type="text"/></p>
                        <p><b>Số điện thoại</b> <input name="phone" onKeyUp={this.handleChange} type="text"/></p>
                        <p><b>Mật khẩu</b> <input name="password" onKeyUp={this.handleChange} type="text"/></p>
                        <p><b>Xác nhận mật khẩu</b> <input name="confirm" onKeyUp={this.handleChange} type="text"/></p>
                        <p>
                            <button type='button' className="btn btn-success" onClick={this.handleNew}>Tạo mới</button>
                            <button type='button' className="btn btn-primary">Lưu</button>
                        </p>
                    </fieldset>
                </form>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Tên tài khoản</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(u => 
                                <tr key={u.id}>
                                    <td>{u.username}</td>
                                    <td>{u.email}</td>
                                    <td>{u.phone}</td>
                                    <td>
                                        <button className="btn btn-warning">Sửa</button>
                                        {/* <button class="btn btn-primary">Đổi mật khẩu</button> */}
                                        <button className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
