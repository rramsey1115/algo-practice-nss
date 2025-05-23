import { Route, Routes } from 'react-router-dom'
import { Home } from './Home/Home'
import { SumMultiplesView } from './01_sumMultiples/SumMultiplesView'
import { BuildStaircaseView } from './02_buildStaircase/BuildStairCaseView'
import { TallBuildingsView } from './03_tallBuildings/TallBuildingsView'
import { DownOnTheFarmView } from './04_downOnTheFarm/downOnTheFarmView'
import { TheProfessorView } from './05_theProfessor/theProfessorView'
import { StrandedSurveyorView } from './06_strandedSurveyor/StrandedSurveyorView'
import { NumPalView } from './07_numbersPalindrome/numPalView'
import { WordsPalView } from './08_wordsPalindrome/WordsPalView'
import { ArcadeEliteView } from './09_arcadeElite/ArcadeEliteView'
import { FreqFrenzyView } from './10_frequencyFrenzy/FreqFrenzyView.jsx'
import { FreqDupView } from "./11_frequencyDuplicates/FreqDupView.jsx"
import { ProdCheckSumView } from './12_productChecksums/ProdCheckSumView'
import { ProdMatchingView } from './13_productMatching/ProdMatchingView'
import { DragonFlightView } from './15_dragonFlight/DragonFlightView.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/multiples' element={<SumMultiplesView />} />
        <Route path='/staircase' element={<BuildStaircaseView />} />
        <Route path='/buildings' element={<TallBuildingsView />} />
        <Route path='/farm' element={<DownOnTheFarmView />} />
        <Route path='/professor' element={<TheProfessorView />} />
        <Route path='/stranded' element={<StrandedSurveyorView />} />
        <Route path='/numspal' element={<NumPalView />} />
        <Route path='/wordspal' element={<WordsPalView />} />
        <Route path='/arcade' element={<ArcadeEliteView />} />
        <Route path='/dragon' element={<DragonFlightView />} />
        <Route path='/freqfrenzy' element={<FreqFrenzyView />} />
        <Route path='/freqduplicates' element={<FreqDupView />} />
        <Route path='/prodsums' element={<ProdCheckSumView />} />
        <Route path='/prodmatching' element={<ProdMatchingView />} />
      </Routes>
    </>
  )
}

export default App
