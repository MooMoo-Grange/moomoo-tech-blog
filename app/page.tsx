import TimeHero from "@/components/home/TimeHero"
import DayPreview from "@/components/home/DayPreview"
import StoryPreview from "@/components/home/StoryPreview"
import JoinRhythm from "@/components/home/JoinRhythm"

export default function HomePage() {
  return (
    <>
      {/* Section 1: 시간 감응형 히어로 */}
      <TimeHero />

      {/* Section 2: 예수원의 하루 — 타임라인 미리보기 */}
      <DayPreview />

      {/* Section 3: 60년의 이야기 — 서사 프리뷰 */}
      <StoryPreview />

      {/* Section 4: 이 리듬에 함께하기 */}
      <JoinRhythm />
    </>
  )
}
