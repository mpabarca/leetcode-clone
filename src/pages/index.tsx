import Navbar from '@/components/molecules/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Navbar />
      <h1>New page leet code clone</h1>
    </main>
  )
}

export default Home;
