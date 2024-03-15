import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import Image from "next/image";
import { LuChevronRightCircle } from "react-icons/lu";

export default function Home() {
  return (
    <div className='relative bg-white'>
      <div className='w-full'>
        <nav className='w-full flex justify-between items-center px-10 py-4 bg-white fixed top-0 left-0 z-50 shadow-lg'>
          <div className='w-[270px] h-[60px]'>
            <Logo />
          </div>
          <div>
            <ul className='flex uppercase text-primary items-center'>
              <li className='mr-8'>{"b'sundrigs"}</li>
              <li className='mr-8'>aus der region</li>
              <li className='mr-8'>rezepte</li>
              <li className='mr-8'>angebote</li>
              <li className='mr-8'>sortiment</li>
              <li className='mr-8'>übor üs</li>
              <li className=''>
                <Image
                  src={"/assets/lupe.png"}
                  alt='search'
                  width={32}
                  height={32}
                />
              </li>
            </ul>
          </div>
        </nav>
        <div className='relative w-full'>
          <Image
            src={"/assets/hero_bg.png"}
            alt='hero'
            width={1920}
            height={0}
          />
          <div className='absolute z-40 flex text-white items-center justify-center text-center uppercase font-bold text-4xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            {"Sutterlüty's Bio-Produkte"}
          </div>
          <div className='bg-gray-600 bg-opacity-40 w-full h-full absolute z-0 top-0 left-0' />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-x-28 px-32 pt-16'>
        <div className='flex flex-col justify-center items-center'>
          <Image src={"/assets/aktionen.png"} alt='1' width={100} height={0} />
          <div className='text-center mt-5'>
            Attraktive Angebote, reizvolle Rabatte und jede Menge Vorteile –
            informieren Sie sich hier über unsere aktuellen Angebote und
            Vorteilsaktionen.
          </div>
          <div className='mt-4 font-bold cursor-pointer flex gap-x-1 items-center'>
            Jetz stöbern
            <LuChevronRightCircle />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Image src={"/assets/flugblatt.png"} alt='1' width={100} height={0} />
          <div className='text-center mt-5'>
            Unser aktuelles Flugblatt – hier können Sie dieses online ansehen
            oder ganz einfach als PDF downloaden.
          </div>
          <div className='mt-4 font-bold cursor-pointer flex gap-x-1 items-center'>
            Jetz stöbern
            <LuChevronRightCircle />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Image src={"/assets/gusto.png"} alt='1' width={100} height={0} />
          <div className='text-center mt-5'>
            Aktuelle Menüpläne für unsere Gusto Restaurants finden Sie hier zum
            Nachlesen und Downloaden.
          </div>
          <div className='mt-4 font-bold cursor-pointer flex gap-x-1 items-center'>
            Jetz stöbern
            <LuChevronRightCircle />
          </div>
        </div>
      </div>
      <div className='mt-16 w-full px-96 py-16 bg-primary text-white text-center'>
        <div className='uppercase font-bold text-3xl'>
          Noch auf der Suche nach der passenden Lehrstelle?
        </div>
        <p className='mt-8 mb-8'>Bewirb dich jetzt</p>
        <Button>Mehr erfahren</Button>
      </div>
      <div className='mt-32'>
        <h1 className='uppercase text-5xl font-bold text-center px-64 text-white text-stroke-3 leading-relaxed'>
          Die Bewahrung unserer Natur ist uns ein Anliegen
        </h1>
      </div>
      <div className='mt-16 flex flex-col justify-center items-center mb-32'>
        <div className='text-lg w-[800px] mx-auto text-center mb-32 relative'>
          <p className='z-40 relative'>
            Die Plastikverschmutzung in unseren Weltmeeren ist ein globales
            Problem. Im Jahr gelangen rund 8 Millionen Tonnen Plastikmüll in die
            Ozeane. Dieses Plastik bedroht die Tiere und Pflanzen im unseren
            Meeren. <br />
            Mit unserem Partner <b>WasteReduction</b> wollen wir das Plastik,
            dass wir verwenden um unsere Produkte zu verpacken, kompensieren.
            Jede Plastikverpackung, die wir verkaufen, wird kompensiert und
            somit aus den Meeren entfernt, um die Umwelt zu schützen.
          </p>

          <div className='absolute -right-[300px] -bottom-[320px] z-30 opacity-50 bot'>
            <Image src={"/assets/wr.png"} alt='1' width={600} height={0} />
          </div>
        </div>
        <div className='text-2xl text-primary uppercase mt-8 mb-8'>
          Bilder von unseren Plastikkompensationen
        </div>
        <iframe
          height='500px'
          width='1200px'
          style={{ border: "none" }}
          src='http://10.110.49.80:3000/iframe/0c9b3bdd-0049-43ba-b3c7-a7f60a996572'
        >
          {" "}
        </iframe>
        <div className='text-2xl text-primary uppercase mt-16 mb-16'>
          Standorte an denen wir bereits Plastik kompensieren
        </div>
        <iframe
          height='500px'
          width='1200px'
          style={{ border: "none" }}
          src='http://10.110.49.80:3000/iframe/57f55fb7-c6c0-4552-90ce-8318c5e12448'
        >
          {" "}
        </iframe>
        <div className='text-2xl text-primary uppercase mt-12 mb-16'>
          Unser aktueller Kompensationserfolg
        </div>
        <iframe
          height='400px'
          width='800px'
          style={{ border: "none" }}
          src='http://10.110.49.80:3000/iframe/623317b5-753e-48ff-a470-52db2c4d116e'
        >
          {" "}
        </iframe>
      </div>
      <div className='bg-klima mt-52 w-full px-72 py-16 grid grid-cols-2 items-center'>
        <Image src={"/assets/klimaschutz.png"} alt='1' width={392} height={0} />
        <div>
          <div className='uppercase font-bold text-brown text-2xl'>
            Klimaschutz schenken mit 10+1
          </div>
          <p className='text-brown mt-4'>
            Lassen Sie 10+1 Bäume pflanzen! Mit dem Kauf eines
            Klimaschutz-Pakets 10+1 veranlassen Sie die Pflanzung von zehn
            Bäumen in Togo/Westafrika und einem Baum in Vorarlberg. Holen Sie
            sich jetzt Ihr Klimaschutz-Paket mit dem pflanzbaren Bleistift an
            der Sutterlüty Kasse.
          </p>
          <div className='mt-4 text-brown font-bold flex gap-x-1 items-center'>
            {"So geht's"}
            <LuChevronRightCircle />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
