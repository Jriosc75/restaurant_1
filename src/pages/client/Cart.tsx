import ClientLayout from '../../components/sidebard/ClientLayout'
import CrudCart from '../../ui/clients/cart/CrudCart'

export default function Cart() {
    return (
        <ClientLayout search={false}>
            <CrudCart />
        </ClientLayout>
    )
}
