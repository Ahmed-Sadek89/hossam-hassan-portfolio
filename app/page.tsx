import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hossam Hassan',
  description: "Hi, I'm Hossam Hassan  Football analyst specializing in identifying gaps within football tactical analysis and software tools, with a focus on advancing methodologies for performance evaluation and decision-making support",
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg'
  }
}

export default function Home () {
  return (
    <main className='min-h-screen font-bold'>
      Hossam Hassan
      <br />
      Hi, I'm Hossam Hassan  Football analyst specializing in identifying gaps within football tactical analysis and software tools, with a focus on advancing methodologies for performance evaluation and decision-making support
    </main>
  )
}
