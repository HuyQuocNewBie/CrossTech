import { useState } from "react";
import { Appbutton } from "../component/button/Appbutton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from "../component/button/Button";

export const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleActive = () => {
    setActive(!active);
  }
  return (
    <>
      <header className="bg-#FFFF px-20 py-3 w-[1440px] h-[98px] mb-10">
        <div className="max-w-1240 mx-auto flex justify-between w-[1220px] h-[40px]">
          <div className="w-[52.8px] h-[40px]">
            <img src="./public/img/logo.svg" alt="Logo" className="" />
          </div>
          <nav className="flex gap-[32px] leading-5 font-medium size-16 leading-4 text-[#6B6B6B] w-[407px] h-[24px]">
            <a  href="/tapos" className="w-[44px] h-[19px]">Tapos</a>
            <a href="/wallet" className="w-[45px] h-[19px]">Wallet</a>
            <a href="/leaderboard" className="w-[91px] h-[19px]">Leaderboard</a>
            <a href="/shop" className="w-[37px] h-[19px]">Shop</a>
            <div className="relative w-[62px] h-[24px] text-[#CA5C3B] font-bold">
              More 
              <FontAwesomeIcon icon={faChevronDown} className="absolute ps-2 w-[20px] h-[20px]" />
            </div>
          </nav>
          <div className="w-[150px] h-[34px] bg-[#EEC5C7] flex items-center rounded-2xl">
            <Appbutton disabled={active}>
              <button 
              onClick={handleActive}
              className="text-sm"
              >Mainet</button>
            </Appbutton>
            <Appbutton 
            disabled={!active}
            className="text-sm"
            >
              <button onClick={handleActive}>Testnet</button>
            </Appbutton>
          </div>
        </div>
      </header>
      <section className=" max-w-[1008px] max-h-[2006px] gap-80 mx-auto flex">
        <main className="w-[1008px] h-[649px] flex gap-5">
          <nav className="w-[1008px] h-[297px] flex gap-4 flex-col">
                  <div className=" w-[226px] h-[47px] gap-1 flex relative left-[347px]">
                          <h1 className="font-bold text-4xl leading-10">Social Tasks</h1>
                  </div>
                  <p className="w-[560px] h-[22px] font-medium text-sm text-center absolute top-[190px] right-[493px] text-[#6B6B6B]">
                          Complete the Social Tasks to earn extra $Heart token
                          </p>
                  <div className="w-[1008px] h-[196px] rounded-2xl border-2 p-[24px] border-[#EEC5C7] gap-4 flex mt-7">
                        <div className="w-[489px] h-[148px] gap-6 flex flex-col">
                              <p className="w-[265px] h-[28px] font-medium text-2xl leading-7 mb-2">
                              Connect Your X account
                              </p>
                              <div className="w-[489px] h-[96px] gap-4 flex flex-col">
                                      <div className="w-[489px] h-[40px] gap-1 flex flex-col">
                                          <h1 className="w-[489px] h-[20px] font-medium text-sm mb-1">
                                          You need connect your X account to join Social Task
                                          </h1>
                                          <div className="w-[87px] h-[16px] text-[#0D88D8]">
                                              <h1 className="w-[71px] h-[16px] font-normal text-sm leading-4 relative">
                                              Learn more
                                              <FontAwesomeIcon icon={faChevronRight} className="w-[10px] h-[10px] absolute top-[4px]" />
                                              </h1>
                                          </div>
                                      </div>
                                      <Button variant="primary" size="normal" width="235px" height="40px" onClick={() => console.log('Small primary button clicked!')}>
                                        <p className="w-[171px] h-[24px]">Connect your X account</p>
                                      </Button>
                              </div>
                        </div>
                  </div>
              </nav>
        </main>
            
      </section>
    </>
  );
};
