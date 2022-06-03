import { Link, useParams } from 'react-router-dom'
import usePurchaseDetail from '../../hooks/usePurchaseDetail'

const PurchaseDetail = () => {
    const { productId } = useParams();
    const [product] = usePurchaseDetail(productId);

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h2 className="text-center text-2xl text-blue-600 font-bold">Purchase Details</h2>
                <div className="card-body">
                    <h2>You are Purchase: {product?.name}</h2>
                    <h2>Price far pice: {product?.price}</h2>
                    <div className='text-center'>
                        <Link to={`/order/${productId}`}>
                            <button className='btn btn-success'>Order</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PurchaseDetail;