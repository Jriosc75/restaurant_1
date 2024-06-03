import ClientLayout from '../../components/sidebard/ClientLayout'
import CrudMenu from '../../ui/clients/menu/CrudMenu'

export default function Menu() {
    return (
        <ClientLayout search={true}>
            <CrudMenu />
        </ClientLayout>
    )
}
