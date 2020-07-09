import React from 'react'
import './index.css'
import Intro from './components/intro'
import Header from './components/header'
import Home from './components/home'
import Lore from './components/lore'
import Gallery from './components/gallery'
import TransitionSwitch from 'react-router-transition-switch'
import Fader from 'react-fader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ost from './assets/background.mp3'
import 'react-moskaj-audio-player/lib/styles.css'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import logom from './assets/logom.png'

const audioList1 = [
  {
    name: 'I N S O M N I U M',
    singer: '',
    cover: logom,
    musicSrc: () => {
      return Promise.resolve(ost)
    },
  },
]

const App = () => {
  return (
    <div>
      <ReactJkMusicPlayer
        audioLists={audioList1}
        showLyric={false}
        showDestroy={false}
        showReload={false}
        showDownload={false}
        showPlayMode={false}
        defaultVolume={0.6}
        showPlay={true}
        toggleMode={true}
        showMiniProcessBar={true}
        defaultPlayMode="singleLoop"
        defaultPosition={{
          right: 40,
          bottom: 40,
        }}
      />
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route component={Header} />
        </Switch>
        <TransitionSwitch component={Fader}>
          <Route path="/home" component={Home} />
          <Route path="/lore" component={Lore} />
          <Route path="/gallery" component={Gallery} />
        </TransitionSwitch>
      </Router>
    </div>
  )
}

export default App
