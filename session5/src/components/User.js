import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            values: {},
            typeForm: 'create'
        }
    }

    handleChange = (event) => {
        // this.setState((prevState) => {
        //     let obj = {...prevState.values};
        //     obj[event.target.name] = event.target.value;
        //     return { values: obj };
        // }, () => {
        //     // Xử lý sau khi state được set
        //     console.log(this.state);
        // })
        this.setState((prevState) => ({
            values: {...prevState.values, [event.target.name]: event.target.value }
        }));
    }

    btnAddNew = () => {
        let newUser = this.state.values;
        if (newUser.password !== newUser.confirm) {
            alert('Mật khẩu không khớp');
            return;
        }
        newUser.id = this.state.users.length + 1;
        this.setState(prevState => ({
            users: [...prevState.users, newUser],
            values: {}
        }));
    }

    btnEdit = (userEdit) => {
        this.setState({
            values: userEdit
        });
    }

    btnSave = () => {
        let _userInit = this.state.values;
        this.setState(prevState => ({
            users: prevState.users.map(u => {
                if (u.id == _userInit.id) {
                    u.username = _userInit.username;
                    u.email = _userInit.email;
                    u.phone = _userInit.phone;
                    u.password = _userInit.password;
                }
                return u;
            })
        }))
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Thông tin tài khoản</legend>
                        <input onChange={this.handleChange} name="id" value={this.state.values.id || ''} type="hidden"/>
                        <p><b>Tên tài khoản</b> <input onChange={this.handleChange} name="username" value={this.state.values.username || ''} type="text"/></p>
                        <p><b>Email</b> <input onChange={this.handleChange} name="email" value={this.state.values.email || ''} type="text"/></p>
                        <p><b>Số điện thoại</b> <input onChange={this.handleChange} name="phone" value={this.state.values.phone || ''} type="text"/></p>
                        <p><b>Mật khẩu</b> <input onChange={this.handleChange} name="password" value={this.state.values.password || ''} type="text"/></p>
                        <p><b>Xác nhận mật khẩu</b> <input onChange={this.handleChange} name="confirm" value={this.state.values.confirm || ''} type="text"/></p>
                        <p>
                            <button type='button' onClick={this.btnAddNew} className="btn btn-success">Tạo mới</button>
                            <button type='button' onClick={this.btnSave} className="btn btn-primary">Lưu</button>
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
                            this.state.users.map((user) => {
                                return <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <button onClick={(e) => {
                                            console.log("Clicked!");
                                            this.btnEdit(user);
                                        }} className="btn btn-warning">Sửa</button>
                                        <button className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
