import React, { useState } from 'react'

export default function Table() {
    const [persons, setPersons] = useState([
        {
            id: 'P01',
            name: 'Nam',
            gender: true
        },
        {
            id: 'P02',
            name: 'Anh',
            gender: false
        },
        {
            id: 'P03',
            name: 'Vinh',
            gender: true
        }
    ])
    const [result, setResult] = useState(persons);
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const loadData = (data) => {
        return data.map(p => 
            <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.gender ? 'Nam' : 'Nữ'}</td>
            </tr>
        )
    }
    const handleChange = (key) => {
        setResult(persons.filter(x => x.name.indexOf(key) >= 0));
    }
    const handleSort = (accessor) => {
        let order = accessor === sortField ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc';
        setSortField(accessor);
        setSortOrder(order);
        // Sắp xếp mảng
        let sorted = [...persons].sort((p1, p2) => {
            return p1[accessor].toString().localeCompare(p2[accessor].toString(), "en", {
                numeric: true
            }) * (order === 'asc' ? 1 : -1);
        });
        
        setResult(sorted);
    }

    return (
        <div>
            <p>
                <input type="text" onChange={e => handleChange(e.target.value)} placeholder='Tìm kiếm theo tên....' />
            </p>
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th onClick={e => handleSort('id')}>ID</th>
                        <th onClick={e => handleSort('name')}>Name</th>
                        <th onClick={e => handleSort('gender')}>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    { loadData(result) }
                </tbody>
            </table>
        </div>
    )
}
