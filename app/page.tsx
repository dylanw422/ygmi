'use client'
import { useState, useEffect, useRef } from "react"
export default function Home() {
  const [twitter, setTwitter] = useState('')
  const [discord, setDiscord] = useState('')
  const [imagesLoaded, setImagesLoaded] = useState(0)
  const contactRef = useRef<HTMLDivElement | null>(null)
  const totalImages = 15

  const postContact = async () => {
    setTwitter('')
    setDiscord('')
    await fetch('https://discord.com/api/webhooks/1215047742573776926/Tad8K6JELt7PTlxScE9zMZlFsaY1Rnks3URp7m0ET-SCD3uwuPa9cxe6awfMMHbqpMbw', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: `**Twitter:** ${twitter} \n**Discord:** ${discord}`
      })
    })
    window.open('https://discord.gg/gG7neJfhW6')
  }

  const handleScroll = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const handleImageLoad = () => {
    setImagesLoaded(prevCount => prevCount + 1);
  };

  return (
    <div id='screen' className="w-screen bg-[#080518] flex justify-center text-white">
      <div id='body' className="w-full lg:w-3/4 flex flex-col items-center text-base">
        <div id='header' className="w-full flex justify-between items-center py-8 px-4 sticky top-0 bg-[#080518] z-20">
          <img src='/webp/ygmi.webp' className="h-6"/>
          <button onClick={handleScroll} className="text-sm lg:text-base px-8 py-3 rounded-xl bg-gradient-to-b from-[#5039F7] to-[#7764FD] hover:cursor-pointer border-t-2 border-[#A194FF]">Apply now</button>
        </div>
        <div id='first-title' className="flex flex-col items-center">
          <h1 className="text-2xl lg:text-4xl font-medium text-center">Supercharge your community engagement.</h1>
          <h2 className="text-sm lg:text-base font-light w-3/4 text-center text-neutral-400 mt-4">The solution you need to make your project successful</h2>
          <button onClick={handleScroll} className="text-sm lg:text-base px-6 py-3 rounded-xl bg-gradient-to-b from-[#5039F7] to-[#7764FD] hover:cursor-pointer border-t-2 border-[#A194FF] mt-10 z-10">Amplify your project outreach now</button>
          <img className="block lg:hidden w-full mt-[-148px]" src='/webp/bgMainSmall2.webp'/>
          <img className="hidden lg:block w-full" src='/webp/bgMain.webp'/>
        </div>
        <div id='info-graphics' className="lg:flex px-4 mt-[-96px] lg:mt-24">
          <div id='referral-system' className="aspect-square bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl h-[350px] relative lg:mx-4">
            <div id='referral-system-body' className="bg-[#0f0e16] rounded-xl h-[350px] px-6 py-10 flex flex-col items-center">
              <h1 className="w-full text-left text-2xl font-medium">Referral System</h1>
              <h2 className="text-sm font-light text-neutral-400 mt-4">User needs a referral code to apply to your project. Accepted applicants receive 3 referral codes.</h2>
              <img className="absolute bottom-0" src='/referralImg.svg'/>
            </div>
          </div>
          <div id='whitelist-manager' className="aspect-square bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl h-[350px] relative mt-16 lg:mt-8 lg:mx-4">
            <div id='whitelist-manager-body' className="bg-[#0f0e16] rounded-xl h-[350px] px-6 py-10 flex flex-col items-center">
              <h1 className="w-full text-left text-2xl font-medium">Whitelist Manager</h1>
              <h2 className="text-sm font-light text-neutral-400 mt-4">Manage all applications through our smooth built-in admin dashboard.<br/>Export all whitelisted wallets with ease.</h2>
              <img className="absolute bottom-0" src='/adminBoard.svg'/>
            </div>
          </div>
          <div id='your-identity' className="aspect-square bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl h-[350px] relative mt-16 lg:mx-4">
            <div id='your-identity-body' className="bg-[#0f0e16] rounded-xl h-[350px] px-6 py-10 flex flex-col items-center">
              <h1 className="w-full text-left text-2xl font-medium">Your Identity</h1>
              <h2 className="text-sm font-light text-neutral-400 mt-4">We make sure your application respects your brand identity.</h2>
              <img className="absolute bottom-2" src='/identity.svg'/>
            </div>
          </div>
        </div>
        <div id='user-flow' className="mt-20 lg:mt-36 w-full flex flex-col items-center">
          <div id='user-flow-title' className="flex flex-col items-center">
            <h2 className="text-sm lg:text-base text-[#7764fd]">User Flow</h2>
            <h1 className="text-2xl lg:text-4xl w-3/5 text-center font-medium">Simple steps for an easy onboarding</h1>
          </div>
          <div id='user-flow-graphics' className="w-full flex lg:justify-center overflow-auto p-4 mt-4">
            <div id='connections' className="aspect-square mr-8 bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl h-[350px] relative">
              <div id='connections-body' className="bg-[#0f0e16] rounded-xl h-[350px] px-6 py-8 flex flex-col items-center">
                <h1 className="w-full text-left text-xl font-medium">Connections</h1>
                <h2 className="text-sm font-light text-neutral-400 mt-4">User connects their wallet and discord through our safe and secure connection system.</h2>
                <img className="absolute bottom-4" src='/connections.svg'/>
              </div>
            </div>
            <div id='invite-code' className="aspect-square mr-8 bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl h-[350px] relative">
              <div id='invite-code-body' className="bg-[#0f0e16] rounded-xl h-[350px] px-6 py-8 flex flex-col items-center">
                <h1 className="w-full text-left text-xl font-medium">Use Invite Code</h1>
                <h2 className="text-sm font-light text-neutral-400 mt-4">Use your unique code to access the application form.</h2>
                <img className="absolute bottom-4" src='/apply.svg'/>
              </div>
            </div>
            <div id='track-status' className="aspect-square bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl h-[350px] relative">
              <div id='track-status-body' className="bg-[#0f0e16] rounded-xl h-[350px] px-6 py-8 flex flex-col items-center">
                <h1 className="w-full text-left text-xl font-medium">Track Your Status <br/>and Level Up</h1>
                <h2 className="text-sm font-light text-neutral-400 mt-4">User can track their application status and start earning xp through quests.</h2>
                <img className="absolute bottom-4" src='/status.svg'/>
              </div>
            </div>
          </div>
          <h2 className="block lg:hidden font-medium text-[#7764fd]" style={{
          backgroundImage: 'linear-gradient(90deg, #5039f7, #7764fd)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontWeight: 'bold'}}>&gt;&gt;&gt; Swipe &gt;&gt;&gt;</h2> 
        </div>
        <div id='more-info' className="my-20 lg:my-48 px-4">
          <div id='top-level-large-screens' className="lg:flex items-end">
            <div id='power-quests' className="block lg:hidden bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl h-[450px] relative lg:mr-8">
              <div id='power-quests-body' className="h-full w-full bg-[#0f0e16] rounded-xl px-6 py-8 flex flex-col items-center" style={{ backgroundImage: "url('/webp/smallCompass2.webp')",
              backgroundSize: "cover"}}>
                <h1 className="w-full text-left text-2xl font-medium">Power Quests !</h1>
                <h2 className="font-light text-neutral-400 mt-4">Superchase your socials with our engaging quests! Effortlessly reward interactions like never before!</h2>
              </div>
            </div>
            <div id='power-quests' className="hidden lg:block bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl w-[750px] h-[400px] relative lg:mr-8">
              <div id='power-quests-body' className="h-full w-full bg-[#0f0e16] rounded-xl h-[350px] px-6 py-8 flex flex-col" style={{ backgroundImage: "url('/webp/compass.webp')",
              backgroundSize: "140%",
              backgroundPosition: "top"}}>
                <h1 className="w-full text-left text-2xl font-medium">Power Quests !</h1>
                <h2 className="font-light text-neutral-400 w-f mt-4 w-3/4">Supercharge your socials with our engaging quests! Effortlessly reward interactions like never before!</h2>
              </div>
            </div>
            <div id='leaderboard' className="bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl lg:w-[350px] h-[500px] lg:h-[475px] relative mt-12 lg:ml-8">
              <div id='leaderboard-body' className="h-full w-full bg-gradient-to-b from-[#5038f7] to-[#7764fd] rounded-xl h-[350px] px-6 py-8 flex flex-col items-center">
                <h1 className="w-full text-left text-2xl font-medium">Leaderboard</h1>
                <h2 className="font-light w-full text-left text-neutral-200 mt-4">Make your community members <br/> feel like winners.</h2>
                <img className="absolute bottom-0 w-full" src='/webp/leaderboard2.webp'/>
              </div>
            </div>
          </div>
          <div id='bottom-level-large-screens' className="lg:flex items-start lg:w-full justify-center">
            <div id='rank' className="block lg:hidden bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl h-[450px] relative mt-12">
              <div id='rank-body' className="h-full w-full bg-[#0f0e16] rounded-xl h-[350px] px-6 py-8 flex flex-col items-center" style={{ backgroundImage: "url('/webp/smallPyramid2.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center"}}>
                <h1 className="w-full text-left text-2xl font-medium">Rank and XP System</h1>
                <h2 className="font-light text-neutral-400 mt-4">Unlock more xp points by carefully inviting active members. You win, everyone wins!</h2>
              </div>
            </div>
            <div id='rank' className="hidden lg:block bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl lg:w-[600px] h-[400px] relative mt-12 lg:mr-8">
              <div id='rank-body' className="h-full w-full bg-[#0f0e16] rounded-xl h-[350px] px-6 py-8 flex flex-col items-center" style={{ backgroundImage: "url('/webp/pyramid.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center"}}>
                <h1 className="w-full text-left text-2xl font-medium">Rank and XP System</h1>
                <h2 className="font-light text-neutral-400 mt-4">Unlock more xp points by carefully inviting active members. You win, everyone wins!</h2>
              </div>
            </div>
            <div id='much-more' className="aspect-square bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl w-full lg:w-[325px] relative mt-12 lg:ml-8">
              <div id='much-more-body' className="bg-[#0f0e16] h-full w-full rounded-xl h-[350px] px-6 py-8 flex flex-col items-center">
                <img className="absolute lg:bottom-10% w-full" src='/muchMore.svg'/>
              </div>
            </div>
          </div>
        </div>
        <div id='experience' className="w-full lg:w-full px-4">
          <div id='game' className="bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl h-[790px] relative mt-12">
            <div id='game-body' className="h-full w-full bg-gradient-to-b from-[#5038f7] to-[#7764fd] rounded-xl h-[350px] px-6 lg:px-12 py-8 flex flex-col lg:flex-row items-center">
              <div>
                <h1 className="w-full text-left text-2xl lg:text-4xl lg:w-7/12 font-medium">Seamless gamified experience for your community !</h1>
                <h2 className="font-light w-full text-left text-neutral-200 mt-4 lg:mt-8 lg:w-7/12">Transform your whitelist distribution into a gamified experience. Introducing levels and ranking for an engaging community journey!</h2>
                <div className="w-full flex justify-start">
                  <button onClick={() => window.open('https://discord.gg/gG7neJfhW6')} className="mt-10 lg:mt-14 px-6 py-3 bg-[#ffffff] bg-opacity-10 rounded-2xl">Ask for a demo</button>
                </div>
              </div>
              <img className="absolute bottom-0 object-cover lg:right-0 lg:h-full lg:w-1/2" src='/webp/game2.webp'/>
            </div>
          </div>
        </div>
        <div id='contact' ref={contactRef} className="w-full lg:w-2/5 px-4 mt-24">
          <div id='contact-form' className="bg-gradient-to-b from-neutral-700 to-[#0f0e16] p-[1px] rounded-xl relative mt-12">
            <div id='contact-form-body' className="bg-[#0f0e16] rounded-xl py-8 px-4 lg:px-8 lg:py-12 flex flex-col items-center">
              <h2 className="text-sm lg:text-base text-[#7764fd]">Contact</h2>
              <h1 className="text-2xl lg:text-4xl text-center font-medium my-2">Get in touch with us !</h1>
              <h2 className="text-sm lg:text-base font-light text-neutral-400 text-center w-4/6">We will go through your project and see if it can fit our product.</h2>
              <input onChange={(e) => setTwitter(e.target.value)} className="w-full rounded-lg p-4 bg-[#17161e] font-light mt-10" placeholder="Twitter handle" value={twitter}></input>
              <input onChange={(e) => setDiscord(e.target.value)} className="w-full rounded-lg p-4 bg-[#17161e] font-light mt-6" placeholder="Discord username" value={discord}></input>
              <button onClick={() => postContact()} className="mt-12 px-8 py-3 rounded-xl bg-gradient-to-b from-[#5039F7] to-[#7764FD] hover:cursor-pointer border-t-2 border-[#A194FF]">Let&apos;s build</button>
              <h3 className="mt-4 text-xs text-neutral-500">Your privacy is our priority.</h3>
              <h3 className="text-xs text-neutral-500">And we hate spam as much as you!</h3>
            </div>
          </div>
        </div>
        <div id='border' className="h-[1px] w-3/4 mt-16 lg:mt-32  bg-gradient-to-r from-[#080518] to-[#080518] via-neutral-700"></div>
        <div id='footer' className="w-screen flex justify-center px-4 pt-16 lg:pt-32" style={{
          backgroundImage: "url('/bottomGlow.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div id='footer-body' className="w-full lg:w-3/4">
            <div id='top-level' className="lg:flex items-center justify-evenly">
              <div className="lg:w-1/4">
                <img className="w-36" src='/webp/ygmi.webp'/>
                <h2 className="mt-6 text-sm font-light text-neutral-400">A solution that empowers your community engagement and amplifies your project outreach.</h2>
              </div>
              <div id='nav' className="flex lg:justify-center w-full lg:w-1/3 mt-12 lg:mt-0 text-sm font-light">
                <div id='sections' className="w-1/2 ">
                  <h2>Sections</h2>
                  <h2 className="mt-2 text-neutral-400">Features</h2>
                  <h2 className="mt-2 text-neutral-400">Contact us</h2>
                </div>
                <div id='socials'>
                  <h2>Socials</h2>
                  <h2 className="mt-2 text-neutral-400">Twitter</h2>
                  <h2 className="mt-2 text-neutral-400">Discord</h2>
                </div>
              </div>
              <button onClick={() => window.open('https://discord.gg/gG7neJfhW6')} className="flex w-2/3 lg:w-1/5 items-center bg-[#0f0e16] rounded-xl p-3 mt-12 lg:mt-0">
              <img src='/discord.svg'/>
              <h2 className="text-left ml-4 text-sm">Come and ask us anything !</h2>
            </button>
            </div>
            <h2 className="text-sm font-light text-neutral-500 mt-16 mb-12 lg:mt-32 lg:ml-20">© 2024 ygmi.xyz. All rights reserved.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}