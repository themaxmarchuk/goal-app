import React from 'react';

import rocket from './img/rocket.svg';
import faRocket from './img/fa-rocket.svg';
import smoke from './img/smoke.svg';

import RaisedButton from './components/RaisedButton';
import Logo from './components/Logo';
import History from './components/History';
import Bullet from './components/Bullet';

export default function App() {
  return (
    <div className="font-roboto text-white mt-8 ml-10">
      <Logo />
      <div className="flex justify-between mt-20">
        <div className="text-[90px] ml-[8vw] relative inline-block">
          <h1>Track your Goals</h1>
          <h1 className="text-right italic">
            <span className="text-green-bright">with </span>
            <span className="text-magenta-bright">style.</span>
          </h1>
          <img src={rocket} className="scale-[85%] absolute left-[1.5rem] top-[4.5rem]" />
          {/* <img src={smoke} className='z-[-1] fixed left-[-72px] bottom-[-190px]' /> */}
        </div>
        <div className="inline-block text-3xl mt-[1.45rem] mr-[6vw]">
          <div>Progress at a glance</div>
          <History className="mt-9" />
          <div className="mt-9 text-[18px] text-purple-light">
            Visualize your journey with bla bla bla...
            <ul className="leading-[21px] mt-4 ml-4">
              <li className="mb-1">
                <Bullet className="inline mb-[0.3rem] mr-2 text-magenta-bright" />
                Some facts that you
              </li>
              <li className="mb-1">
                <Bullet className="inline mb-[0.3rem] mr-2 text-green-bright" />
                <span className="">Don't care about</span>
              </li>
              <li className="mb-1">
                <Bullet className="inline mb-[0.3rem] mr-2 text-purple-dark" />
                <span className="">Why are you still</span>
              </li>
              <li className="mb-1">
                <Bullet className="inline mb-[0.3rem] mr-2 text-purple" />
                <span className="">Reading this?</span>
              </li>
            </ul>
          </div>
          <div className="mt-9">
            <RaisedButton>See More</RaisedButton>
            <RaisedButton primary>
              Launch Today
              <img src={faRocket} className="scale-[85%] ml-[11px]" />
            </RaisedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
