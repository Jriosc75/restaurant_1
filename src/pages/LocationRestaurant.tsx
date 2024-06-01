import ClientLayout from '../components/sidebard/ClientLayout'
import CrudLocation from '../ui/clients/location/CrudLocation'

export default function LocationRestaurant() {
    return (
        <ClientLayout search={false}>
            <CrudLocation />
        </ClientLayout>
    )
}
