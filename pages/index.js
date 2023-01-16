import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Featured from '@/component/Featured'
import PizzaList from '@/component/PizzaList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList/>
    </>
  )
}
