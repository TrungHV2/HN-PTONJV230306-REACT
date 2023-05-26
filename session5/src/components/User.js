import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Thông tin tài khoản</legend>
                        <p><b>Tên tài khoản</b> <input type="text"/></p>
                        <p><b>Email</b> <input type="text"/></p>
                        <p><b>Số điện thoại</b> <input type="text"/></p>
                        <p><b>Mật khẩu</b> <input type="text"/></p>
                        <p><b>Xác nhận mật khẩu</b> <input type="text"/></p>
                        <p>
                            <button class="btn btn-success">Tạo mới</button>
                            <button class="btn btn-primary">Lưu</button>
                        </p>
                    </fieldset>
                </form>

                <table class="table">
                    <thead>
                        <tr>
                            <th>Tên tài khoản</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>admin</td>
                            <td>admin@gmail.com</td>
                            <td>0987654321</td>
                            <td>
                                <button class="btn btn-warning">Sửa</button>
                                {/* <button class="btn btn-primary">Đổi mật khẩu</button> */}
                                <button class="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
