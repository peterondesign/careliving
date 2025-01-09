import { useRouter } from 'next/router';

const Service = () => {
    const router = useRouter();
    const { service } = router.query;

    return (
        <div>
            <h1>{service} Service</h1>
            <p>Description of the {service} service.</p>
        </div>
    );
};

export default Service;
