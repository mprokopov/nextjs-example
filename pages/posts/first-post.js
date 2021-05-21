import Link from 'next/link'
import Head from 'next/head'
import Message from '../../components/message'

export default function FirstPost() {
  return (
    <>
    <div className="md:container md:mx-auto px-4">
    <Head>
    <title>First Post</title>
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
    <Message title="Maksym" message="This is your new message"/>
    <Message title="Nexus" message="This is your second message"/>
    </>
  )
}