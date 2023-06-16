import React, { useEffect, useState } from 'react'
import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3100/'
})

export default function Students() {
    const [isMount, setIsMount] = useState(false);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        if (isMount) {
            console.log('componentDidMount');
            // Call api lấy dữ liệu student (side effect)
            http.get('students')
            .then(response => setStudents(response.data))
            .catch(error => console.log(error));

            return () => {
                console.log('componentWillUnmount')
            }
        } else {
            setIsMount(true);
        }
    }, [isMount])

    return (
        <div>
            <table border="1" cellPadding={5} cellSpacing={0} width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(s => <tr key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.fullname}</td>
                        <td>{s.age}</td>
                        <td>{s.gender ? 'Male' : 'Female'}</td>
                        <td>{s.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
