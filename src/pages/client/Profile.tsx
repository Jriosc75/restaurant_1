import ClientLayout from '../../components/sidebard/ClientLayout'
import CrudProfile from '../../ui/clients/profile/CrudProfile'

export default function Profile() {
    return (
        <ClientLayout search={false}>
            <CrudProfile />
        </ClientLayout>
    )
}
