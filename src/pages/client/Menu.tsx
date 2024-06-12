import ClientLayout from '../../components/sidebard/ClientLayout'
import CrudFoods from '../../ui/clients/menu/CrudFoods'

export default function Menu() {
    return (
        <ClientLayout search={true}>
            <CrudFoods />
        </ClientLayout>
    )
}
