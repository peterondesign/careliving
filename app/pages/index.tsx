import Link from 'next/link';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        {/* ...existing code... */}
                        <li><Link href="/services/personal-care">Service</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        {/* ...existing code... */}
                    </ul>
                </nav>
            </header>
            {/* ...existing code... */}
        </div>
    );
};

export default Home;
