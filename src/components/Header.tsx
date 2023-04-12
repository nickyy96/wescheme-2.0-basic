import Image from 'next/image';

const Header = () => {
    return (
        <div className="h-20 bg-black flex items-center pl-4 font-bold text-white text-4xl gap-10 border-b-4 border-purple-400">
            <Image src="/bootstrap-logo.png" alt="Logo" width={150} height={400}></Image>
            <p>WeScheme <span className="text-purple-400">2.0</span></p>
        </div>
    )
}

export default Header