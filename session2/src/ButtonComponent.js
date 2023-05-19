
export function ButtonComponent(props) {
    function btn_Click(evt) {
        props.handleClick(evt, 'Giá trị truyền ra ngoài');
    }

    return (
        <button type="button" onClick={btn_Click}>{props.value}</button>
    );
}