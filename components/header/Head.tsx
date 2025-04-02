import Image from 'next/image'

import ButtonAnimated from './ButtonAnimated'
const Head = () => {
  return (
    <div className="flex w-full items-center justify-between p-6">
      <div className="flex items-center gap-3">
        <Image src={'/images/AGLLogo.png'} alt="logo" width={60} height={60} />

        <div className="flex flex-col">
          <span className="text-2xl text-white font-extrabold">AGL</span>
          <div className="text-lg text-white font-semibold">
            Associação Artística e Assistencial
          </div>
        </div>
      </div>

      <ButtonAnimated />
    </div>
  )
}

export { Head }
