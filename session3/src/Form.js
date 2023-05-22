import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            student: {
                id: 1,
                name: 'Nam',
                status: false
            },
            students: ['Thuận', 'Đức', 'Thành', 'Huyền', 'Hương']
        }
    }
    handleChange = (evt) => {
        this.setState({
            txtName: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault(); // Ngăn form gửi dữ liệu đi (không load trang)
        console.log("My name is " + this.state.txtName);
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} value={this.state.txtName} />
                    <button type='submit'>Gửi</button>
                </form>
                <div>
                    <p><b>Mã SV: </b>{this.state.student.id}</p>
                    <p><b>Tên SV: </b>{this.state.student.name}</p>
                    <p><b>Trạng thái: </b> {this.state.student.status ? <span>Đang học</span> : <span>Bảo lưu</span>}</p>
                </div>
                <ul>
                    {
                        this.state.students.map((el, idx) => <li key={idx}>{el}</li>)
                    }
                </ul>
            </>
        )
    }
}
