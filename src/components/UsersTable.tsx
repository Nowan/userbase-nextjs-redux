import BootstrapTable, { ColumnDescription } from 'react-bootstrap-table-next';
import Button from 'react-bootstrap/Button';
import { useAppSelector } from '../redux/hooks';
import { actions } from '../redux/slices/users';
import { selectEntries } from '../redux/slices/users/selectors';
import { UserData } from '../redux/slices/users/types';
import store from '../redux/store';


const columns: Array<ColumnDescription> = [
    {
        dataField: "id",
        text: "Id"
    },
    {
        dataField: "name",
        text: "Name"
    },
    {
        dataField: "username",
        text: "Username",
        sort: true
    },
    {
        dataField: "email",
        text: "Email"
    },
    {
        dataField: "city",
        text: "City"
    },
    {
        dataField: "edit",
        text: "Edit",
        isDummyField: true,
        formatter: (_, user) => <Button>edit</Button>
    },
    {
        dataField: "delete",
        text: "Delete",
        isDummyField: true,
        formatter: (_, user) => (
            <Button onClick={() => store.dispatch(actions.removeUser(user))}>
                delete
            </Button>
        )
    }
];

columns.forEach(columnDescriptor => {
    columnDescriptor.align = columnDescriptor.headerAlign = "center";
})

export default function UsersTable() {
    const users = useAppSelector(selectEntries);

    return (
        <BootstrapTable keyField="id" data={users} columns={columns} />
    );
}