import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "기도문" }

export default function PrayersPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "설립자", path: "/founders" }, { label: "기도문" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">기도문</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-12">
            대천덕 신부와 예수원 공동체가 기도해 온 기도문들을 나눕니다.
          </p>
          <div className="space-y-10">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">예수원 공동체 기도</h2>
              <blockquote className="text-abbey-700 leading-relaxed italic border-l-4 border-forest-300 pl-6">
                <p className="mb-4">하나님 아버지, 우리를 당신의 뜻 안에 굳게 세워 주소서.</p>
                <p className="mb-4">이 공동체를 통하여 당신의 나라가 이 땅에 임하게 하시고,
                우리의 기도와 노동이 당신께 올려드리는 향기로운 제물이 되게 하소서.</p>
                <p className="mb-4">우리를 서로 사랑하게 하시고,
                찾아오는 모든 이에게 그리스도의 평화를 나누게 하소서.</p>
                <p>성령의 능력으로 우리를 새롭게 하시고,
                날마다 주님을 닮아가게 하소서. 아멘.</p>
              </blockquote>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">식전 기도</h2>
              <blockquote className="text-abbey-700 leading-relaxed italic border-l-4 border-forest-300 pl-6">
                <p className="mb-4">주님, 이 음식을 주심에 감사드립니다.</p>
                <p className="mb-4">음식을 준비한 손과 이 땅을 축복하소서.
                이 음식을 먹고 주님의 일을 감당할 힘을 주소서.</p>
                <p>우리 주 예수 그리스도의 이름으로 기도드립니다. 아멘.</p>
              </blockquote>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">저녁 기도</h2>
              <blockquote className="text-abbey-700 leading-relaxed italic border-l-4 border-forest-300 pl-6">
                <p className="mb-4">하루를 마감하며 주님 앞에 나아옵니다.</p>
                <p className="mb-4">오늘 하루 우리를 지키시고 인도하신 은혜에 감사드립니다.
                부족함과 허물을 용서하여 주소서.</p>
                <p className="mb-4">밤 사이 우리를 평안히 지켜 주시고,
                내일 아침 새 힘으로 일어나 주님을 섬기게 하소서.</p>
                <p>성부와 성자와 성령의 이름으로 기도드립니다. 아멘.</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
